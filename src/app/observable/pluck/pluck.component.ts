import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}
  data : any
  users = [
    { name: 'Deepak', skill: 'Angular' },
    { name: 'Harshit', skill: 'Angular1' },
    { name: 'Ameen', skill: 'Angular2' },
    { name: 'Deep', skill: 'Angular3' },
    { name: 'Deepak3', skill: 'Angular4' },
    { name: 'Deepak33', skill: 'Angular5' },
    { name: 'Deepak4', skill: 'Angular6' },
    { name: 'Deepak5', skill: 'Angular7' },
    { name: 'Deepak6', skill: 'Angular8' },
    { name: 'Deepak7', skill: 'Angular9' },
    { name: 'Deepak8', skill: 'Angular10' },
  ];
  ngOnInit(): void {
    from(this.users).
    pipe(
      // map(data => data.name
      pluck('name')
      // for nested we have to give pluck( 'name', 'nested property name')
        ,
     toArray()) 
      .subscribe(res =>{
      this.data = res;
    })
  }
}
