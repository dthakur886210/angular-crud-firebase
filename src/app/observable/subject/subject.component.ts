import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
 givenName : any
  constructor(private du : DesignUtilityService) 
  {
    this.du.givenUserName.subscribe(res =>{
   this.givenName = res;
    })
   }

  ngOnInit(): void {
  }

}
