import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  
  constructor( private _design : DesignUtilityService) { }

  ngOnInit(): void {
    let subs : Subscription
    const arr = ['Deepak', 'dheeraj', 'ameen', 'harshit', 'deep', 'shubam', 'shubh', 'dhee', 'manish', 'shubankar'];
    const source = interval(2000);
    subs =   source.pipe(
     tap((res) => {
        if(res == 4 ) {
            subs.unsubscribe();
          } 
          }),
      map(res => arr[res] 
      ))
    .subscribe(res =>{
     this._design.print(res, 'elContainer');
    })
  }

}
