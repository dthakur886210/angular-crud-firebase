import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { Userlist2Component } from './userlist2/userlist2.component';

const routes: Routes = [
  {path : 'user1', component: UserlistComponent},
  {path :'user2', component : Userlist2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
