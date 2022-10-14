import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/observableservices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe( map(v=> 'Tech video #' + v),take(5));
    const sourceDrama = interval(1000).pipe( map(v=> 'Drama video #' + v),take(5));
    const sourceComedy = interval(1000).pipe( map(v=> 'Comedy video #' + v),take(5));
    // sourceTech.subscribe(res=>{
    //   console.log(res);
    // this.du.print(res, 'elContainer')
    // })
    const finalObs = concat(sourceTech,  sourceDrama,sourceComedy,);
    finalObs.subscribe(res=>{
    console.log(res);
    this.du.print(res,'elContainer');
    })
  }

}
