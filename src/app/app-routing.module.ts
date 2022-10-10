import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import ForgotPasswordComponent from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
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
  {path : 'map', component : MapComponent}
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
