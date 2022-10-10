import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
})
export class CustomObservableComponent implements OnInit , OnDestroy{
  constructor(private _design : DesignUtilityService) {}
 techstack : any
 techstack2:any
 names : any
 subs2 : Subscription |any;
  ngOnInit(): void {
    //example - 01 (manual)
    const cusObs1 = Observable.create(
      (observer: {
        complete(): unknown;
        error(arg0: string): unknown; next: (arg0: string) => void 
}) => {
        // observer.next();
        // observer.error();
        // observer.complete();
        setTimeout(() => {
          observer.next('Angular');
        },1000);
        setTimeout(() => {
          observer.next('Typescipt');
          observer.complete();
        },2000);
        setTimeout(() => {
          observer.next('React');
          // this.techstack = 'complete';
        },3000);
        setTimeout(() => {
          observer.next('Java');
          // observer.error('limit exceed')
        },4000);
        setTimeout(() => {
          observer.next('Gatsby');
          // observer.complete();
          // this.techstack = 'complete';
          // observer.error('limit exceed');
        },5000);
      }
    );
    cusObs1.subscribe((res: any) => {  //(data,error, completion)
      // console.log(res);
      this._design.print(res, 'elContainer')
    },
    (err: any)=>{
      this.techstack = 'error';
    },
    ()=>{
      this.techstack = 'complete'
    }
    );



    // example - 02 (custom interval)
    let count = 0;
    let arr2 = ['Angular', 'React', 'Java', 'HTML',]
    const cusObs2 = Observable.create((observer: {
      error(arg0: string): unknown;
      complete(): unknown; next: (arg0: string) => void; 
}) =>{
      setInterval(()=>{
        observer.next(arr2[count]);
        count++;

        // if (count > 5){
        //   observer.complete();
        // }
        if ( count > 3){
          observer.error('error');
        }
      },1000)
    })
 this.subs2 = cusObs2.subscribe((res: any)=>{
    console.log(res);
    this._design.print(res, 'elContainer2')
    
  },
  (err: any)=>{
    this.techstack2 = 'error';
  },
  ()=>{
    this.techstack2 = 'complete'
  })
  
/*  let arr3 = ['Angular', 'React', 'Java', 'HTML']
  const cusObs3 =  Observable.create((observer: { next: (arg0: string) => void; })=>{
    let count = 0;
    setInterval(()=>{
      observer.next(arr3[count]);
      count++;
  }, 1000)

  }*/
    // example - 03 (Random Names)
    let arr3 = ['Deepak', 'krutik', 'harshit', 'ameen', 'dheeraj'];
    const cusObs3 = Observable.create((observer: { next: (arg0: string) => void; })=>{
      let count = 0;
      setInterval(()=>{
       observer.next(arr3[count]);
       count++;
      }, 1000)
    })
    cusObs3.subscribe((res: any)=>{
      this.names = res;
      
    })

   
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs2.unsubscribe();
  }
}
