import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { Userlist2Component } from './userlist2/userlist2.component';


@NgModule({
  declarations: [
    UserlistComponent,
    Userlist2Component
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
