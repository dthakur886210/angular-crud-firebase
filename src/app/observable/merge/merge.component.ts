import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe( map(v=> 'Tech video #' + v),take(5));
    const sourceDrama = interval(4000).pipe( map(v=> 'Drama video #' + v),take(5));
    const sourceComedy = interval(3500).pipe( map(v=> 'Comedy video #' + v),take(5));
    // sourceTech.subscribe(res=>{
    //   console.log(res);
    // this.du.print(res, 'elContainer')
    // })
    const finalObs = merge(sourceTech,  sourceDrama,sourceComedy,);
    finalObs.subscribe(res=>{
    console.log(res);
    this.du.print(res,'elContainer');
    })
  }


}
