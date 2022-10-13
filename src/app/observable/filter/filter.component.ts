import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  users = [
    {name : 'user 1', gender : 'female'},
    {name : 'user 2', gender : 'female'},
    {name : 'user 3', gender : 'female'},
    {name : 'user 4', gender : 'female'},
    {name : 'user 5', gender : 'female'},
    {name : 'user 6', gender : 'female'},
    {name : 'user 7', gender : 'female'},
    {name : 'user 8', gender : 'female'},
    {name : 'user 9', gender : 'male'},
    {name : 'user 10', gender : 'male'},
    {name : 'user 11', gender : 'male'},
    {name : 'user 12', gender : 'male'},
    {name : 'user 13', gender : 'male'},
    {name : 'user 14', gender : 'male'},
    {name : 'user 15', gender : 'male'},
    {name : 'user 16', gender : 'male'},
    {name : 'user 17', gender : 'male'},
    {name : 'user 18', gender : 'male'},
  ]
  constructor() { }
data : any
  ngOnInit(): void {
    const source = from(this.users);

    source.pipe(
      filter(member => member.gender == 'male')
      ,toArray()).subscribe(res =>{
    this.data = res;
    })
  }


}
