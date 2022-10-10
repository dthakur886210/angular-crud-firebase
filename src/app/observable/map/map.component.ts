import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub1: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    //ex - 01
    const broadcast = interval(1000);
     this.sub1 =  broadcast.pipe(
      map(data => console.log('mapData' + data)
      )
     ).subscribe(res =>{
      console.log('broadcast ' + res);
      
    })
    setTimeout(()=>{
      this.sub1.unsubscribe();
    }, 2000)
  }

}
