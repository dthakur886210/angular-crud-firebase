import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //subscription
  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;
  sub3: Subscription = new Subscription;
  

  //messages 
msg1 : any
msg2 : any
msg3 : any
  constructor(private _design : DesignUtilityService) { }

  ngOnInit(): void {
    //ex - 01
    const broadcast = interval(1000);
     this.sub1 =  broadcast.pipe(
      map(data => 'broadcast ' + data
      )
     ).subscribe(res =>{
      // console.log( res);
      this.msg1 = res;
      
    })
    setTimeout(()=>{
      this.sub1.unsubscribe();
    }, 7000)


    //ex - 02
      this.sub2 = broadcast.pipe(map(data => data + 10))
      .subscribe((res)=>{
  //  console.log(res);
  this.msg2 = res;
   
    })
    setTimeout(()=>{
      this.sub2.unsubscribe();
    }, 7000);

    //ex-03

    const members = from([
      {id : 1, name : 'Deepak'},
      {id : 2, name : 'Ameen'},
      {id : 3, name : 'Krutik'},
      {id : 4, name : 'Harshit'},
      {id : 5, name : 'Dheeraj'},
    ])
  //  let membObs = from(members);
   this.sub3 =  members.pipe(map(data =>data.name)).subscribe(res =>{
   this._design.print(res, 'elContainer')
 })


  }

}
