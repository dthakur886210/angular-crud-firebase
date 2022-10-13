import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private du :  DesignUtilityService) { }
 arr = ['Deepak', 'dheeraj', 'ameen', 'harshit', 'deep', 'shubam', 'shubh', 'dhee', 'manish', 'shubankar'];
  ngOnInit(): void {
  const nameSource = from(this.arr);
  // nameSource.pipe(take(5)) 
    nameSource.pipe(takeLast(5))
    .subscribe(res=>{
    this.du.print(res, 'elContainer')
    })

  let condition1 = timer(5000);
    const sourceUntill = interval(1000);
    let condition2 = fromEvent(document, 'click')
    sourceUntill.pipe(takeUntil(condition2)).subscribe(res =>{
    this.du.print(res, 'elContainer3');
    })
  }

}
