import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
 obsMsg :any;
 subscription: Subscription = new Subscription;
  constructor(private _design_utility : DesignUtilityService) { }

  ngOnInit(): void {
    // const broadCastStuff = interval(2000);
    const broadCastStuff = timer(5000,1000);  // first arg is delay and second is interval
    this.subscription =  broadCastStuff.subscribe(res=>{
      console.log(res);
      this.obsMsg = 'Deepak ' + res;
      this._design_utility.print(this.obsMsg, 'elContainer');
      this._design_utility.print(this.obsMsg, 'elContainer2');
      this._design_utility.print(this.obsMsg, 'elContainer3');
      if ( res >= 5){
        this.subscription.unsubscribe()
      }
    })
  }
  

}
