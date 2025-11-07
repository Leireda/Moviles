import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  
  setItem(key:string, Item:string) {
    localStorage.setItem(key, Item); 
  }
  getItem(key:string){
   return localStorage.getItem(key); 
    
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear(); 
  }

}
