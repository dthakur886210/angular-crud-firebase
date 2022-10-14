import { Component, OnInit } from '@angular/core';
import { from, interval, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private du : DesignUtilityService) { }
  getData(data: any){
    return of( data + 'video uploaded')
  }

  ngOnInit(): void {
    //ex-01 map

    const source = from(['tech', 'comedy', 'news']);
    source.pipe(map(res => this.getData(res)))
    .subscribe(res=> {
      console.log(res);
      this.du.print(res,'elContainer')
    }
      )
    // .subscribe(res=> res.subscribe(res2=>{
    //   console.log(res2);
    //   this.du.print(res,'elContainer')
      
    // }))

    //ex-02 map + merge all

    source.pipe(map(res => this.getData(res)), mergeAll())
    .subscribe(res=> {
      this.du.print(res,'elContainer2')
    }
      )


      //ex-03 mergeMap
  
      source.pipe(mergeMap(res => this.getData(res)), )
      .subscribe(res=> {
        this.du.print(res,'elContainer3')
      }
        )
  }

}
