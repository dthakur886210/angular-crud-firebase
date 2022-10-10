import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
 users = [
  {name : 'Deepak', skill : 'Angular'},
  {name : 'Ameen', skill : 'html'},
  {name : 'Krutik', skill : 'css'},
  {name : 'Harshit', skill : 'js'},
  {name : 'Ravi', skill : 'java'},
  {name : 'Shubam', skill : 'react'}

 ]
  constructor() { }
  sourceSub: Subscription = new Subscription;
  ngOnInit(): void {
    //example -01
    const source = interval(1000);
    this.sourceSub =   source.pipe( take(5),toArray()).subscribe(res =>{
      console.log(res);
    // if ( res >= 8){
    //   this.sourceSub.unsubscribe();
    // }      
    })

    //example -02
    const source2 = from (this.users);
    source2.pipe(toArray()).subscribe(res =>{
      console.log(res);
      
    })

    //example -03
    const source3 = of('Deepak', 'dheeraj', 'Ameen', 'ravi', 'Harshit', 'Krutik');
    source3.pipe(toArray()).subscribe(res =>{
      console.log(res);
      
    })
  }

}
