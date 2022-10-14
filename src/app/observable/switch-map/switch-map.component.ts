import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
 getData(data : any){
  return of(data + "video uploaded").pipe(delay(1000));
 }
  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'news']);

    //ex - 01 Map 
    source.pipe(map (data => this.getData(data)))
    .subscribe(res=>{
      this.du.print(res, 'elContainer');
    })

     //ex - 02  switchAll 
     source.pipe(map (data => this.getData(data)),
     switchAll())
     .subscribe(res2=>
      {
        this.du.print(res2, 'elContainer2');
      }
     )

     //ex - 02  switchMap 
     source.pipe(switchMap (data => this.getData(data)))
     .subscribe(res2=>
      {
        this.du.print(res2, 'elContainer3');
      }
     )
  }

}
