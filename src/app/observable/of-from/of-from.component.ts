import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
obsMsg :any;
  constructor(private _design_utility : DesignUtilityService) { }

  ngOnInit(): void {
    //OF
    const obs1 = of('Deepak', 'krutik', 'harshit');
    obs1.subscribe(res =>{
      console.log(res);
      this._design_utility.print(res,'elContainer');
    })
    const obs2 = of( {a:'Deepak', b:'krutik', c:'harshit'});
    obs2.subscribe(res =>{
      this.obsMsg = res;
      console.log(res);

      // this._design_utility.print(res,'elContainer');
    })

     //from Array
  const obs3 = from(['Deepak Thakur', 'Dheeraj Thakur', 'Faclon Labs'])
  obs3.subscribe(res =>{
    console.log(res);
    this._design_utility.print(res,'elContainer3');
  })

  //from Promise
  const promise = new Promise(resolve=>{
    setTimeout(()=>{
      resolve('Promise resolved')
    }, 3000);
  })
  // promise.then(res=>{
  //   console.log(res);
    
  // })
  const obs4 = from(promise)
  obs4.subscribe(res =>{
    console.log(res);
    this._design_utility.print(res,'elContainer4');
  })

  //from string
  const obs5 = from('Deepak')
  obs5.subscribe(res =>{
    console.log(res);
    this._design_utility.print(res,'elContainer5');

  })
 
}
}
