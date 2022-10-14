import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
 getData(data: any){
  return of(data + ' video uploaded').pipe(delay(1500)); // of returns an observable
 }
  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'drama']);

    //ex-01 map
    source.pipe(map(res => this.getData(res)))
    .subscribe(res =>{
     this.du.print(res, 'elContainer')
      
    })

//ex-02 

    source.pipe(map(res => this.getData(res)), concatAll())
    .subscribe(res =>{
      this.du.print(res, 'elContainer2')
    }
  )

  //ex-03 

  source.pipe(concatMap(res => this.getData(res)))
  .subscribe(res =>{
    this.du.print(res, 'elContainer3')
  }
)
  }

}
