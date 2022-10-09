import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit,AfterViewInit {
 
  constructor(private _design_utility : DesignUtilityService) { }
  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res =>{
      let counVal = 'Deepak' + count++;
        this._design_utility.print(counVal, 'elContainer');
        this._design_utility.print(counVal, 'elContainer2');
  })

}
print(val: any, containerId: any){
  let el = document.createElement('li');
  el.innerText = val;
  document.getElementById(containerId)?.append(el)
}
}
