import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import ForgotPasswordComponent from './component/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { FileuploadComponent } from './component/file-upload/file-upload.component';
import { AuthGuard } from './services/auth.guard';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { DebouncetimeDistinctuntilComponent } from './observable/debouncetime-distinctuntil/debouncetime-distinctuntil.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Component1Component } from './subjectdemo/component1/component1.component';
import { Component2Component } from './subjectdemo/component2/component2.component';
import { Component3Component } from './subjectdemo/component3/component3.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
// import { LazyuserComponent } from './lazyuser/lazyuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FileuploadComponent,
    ObservableComponent,
    ListComponent,
    FromeventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    FilterComponent,
    PluckComponent,
    TapComponent,
    TakeComponent,
    DebouncetimeDistinctuntilComponent,
    SubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    CombinelatestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule 
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
