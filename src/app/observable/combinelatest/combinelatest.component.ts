import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit,AfterViewInit {
 nameSource = ['Deepak', 'Dheeraj', 'Ameen', 'Krutik', 'John', 'Alex'];
 colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];
 @ViewChild('names') names : ElementRef | any;
 @ViewChild('color')  color :ElementRef | any;
  constructor() { }
  //whenever we work with dom elements ngAfterViewInit we have to use

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    //observable
   const namesObs = fromEvent<any>(this.names.nativeElement, 'change').pipe(map(event => event.target.value));
   const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(pluck('target', 'value'));

   //ex-01 combineLatest
   combineLatest(namesObs, colorObs).subscribe(([names, color])=>{
    console.log(names, color);
    this.createBox(names, color, 'elContainer');
   })

   //ex-02 withLatestForm
    //master namesobs,, slave colorbs 
    namesObs.pipe(withLatestFrom(colorObs)).subscribe(([names, color])=>{
      console.log(names, color);
      
      this.createBox(names, color, 'elContainer2');
    })


  }
  createBox(names: any, color: any, containerId: any){
    let el = document.createElement('div');
    el.innerText = names;
    el.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(el);
  }

}
