import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit {
 nameSource = ['Deepak', 'Dheeraj', 'Ameen', 'Krutik', 'John', 'Alex'];
 colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];
  constructor() { }

  ngOnInit(): void {
  }

}
