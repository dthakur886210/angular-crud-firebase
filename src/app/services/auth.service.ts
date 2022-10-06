import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {GoogleAuthProvider, GithubAuthProvider,FacebookAuthProvider, User} from '@angular/fire/auth'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn : boolean = false; 
  forgotPassword(email: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private fireauth : AngularFireAuth, private router :Router) { }
  //login method
  login (email :string , password :string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      this.isLoggedIn = true;
   localStorage.setItem('token', 'true');
    this.router.navigate(['/dashboard']);
    }, err =>{
  alert('Something went wrong');
  this.router.navigate(['/login']);
    })
  }
  //register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      // this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  //logout method 
  logout(){
    this.fireauth.signOut().then(()=>{
      this.isLoggedIn = false;
    localStorage.setItem('token', 'false');
    this.router.navigate(['./login']);
    }, err=>{
    alert(err.message)
    })
  }

  //email verification
//   sendEmailForVarification(user:any){
//   console.log(user);
//   user.sendEmailVerification().then((res : any) => {
//     this.router.navigate(['/verify-email']);
//   }, (err : any) => {
//     alert('Something went wrong. Not able to send mail to your email.')
//   })
// }


//signin with google 
googleSignIn(){
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
this.router.navigate(['/dashboard']);
localStorage.setItem('token', JSON.stringify(res.user?.uid));
  }, err =>{
    alert(err.message)
  })
}
}
