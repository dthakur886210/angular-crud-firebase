import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime-distinctuntil',
  templateUrl: './debouncetime-distinctuntil.component.html',
  styleUrls: ['./debouncetime-distinctuntil.component.css'],
})
export class DebouncetimeDistinctuntilComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('myInput') myInput: ElementRef | any;
  constructor() {}
  reqData: any = null;

  @ViewChild('myInput2') myInput2: ElementRef | any;
  reqData2 : any = null;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.


    // ex - 01 Debounce time 
    let seachTerms = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value), debounceTime(1000)
    );
    seachTerms.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });


    // ex - 01 Distinct Untill change  
    let seachTerms2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map((event) => event.target.value), debounceTime(1000), distinctUntilChanged()
    );
    seachTerms2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}
