import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import ForgotPasswordComponent from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DebouncetimeDistinctuntilComponent } from './observable/debouncetime-distinctuntil/debouncetime-distinctuntil.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // {path:'verify-email', component: VerifyEmailComponent},
  {path : 'observable', component : ObservableComponent , children:[
  {path : '', component : ListComponent},
  {path : 'from-event', component : FromeventComponent},
  {path : 'interval', component: IntervalComponent },
  {path : 'of-from', component : OfFromComponent},
  {path : 'to-array', component: ToArrayComponent},
  {path : 'custom-observable', component : CustomObservableComponent},
  {path : 'map', component : MapComponent},
  {path : 'filter', component : FilterComponent},
  {path : 'pluck', component : PluckComponent},
  {path : 'tap', component : TapComponent},
  {path : 'take', component : TakeComponent},
  {path : 'debounce_distinct', component : DebouncetimeDistinctuntilComponent},
  {path : 'subject', component : SubjectComponent},
  {path : 'concat', component : ConcatComponent},
  {path : 'merge', component : MergeComponent},
  {path : 'mergemap', component : MergeMapComponent},
  {path : 'concatmap', component : ConcatMapComponent},
  {path : 'switchmap', component : SwitchMapComponent},
  {path : 'combinelatest', component : CombinelatestComponent}
  
  ]
},
  {
    path: 'lazy',
    loadChildren: () => 
      import('./lazy/lazy.module').then(
        mod => mod.LazyModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
