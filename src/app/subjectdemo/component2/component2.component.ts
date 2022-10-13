import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  userName : string = 'deepak';
  constructor(private du : DesignUtilityService) {
    this.du.givenUserName.subscribe(res =>{
      this.userName = res;
    })
   }

  ngOnInit(): void {
  }
  onChange(uname: { value: string; }){
this.du.givenUserName.next(uname.value)
  }
}
