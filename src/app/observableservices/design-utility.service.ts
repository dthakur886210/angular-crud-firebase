import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  static print(res: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  print(val: any, containerId: any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.append(el)
  }
}
