import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  setNombre(nombre:string){
    localStorage.setItem("nombre", nombre); 
  }

    getNombre(){
   return localStorage.getItem("nombre"); 
  }

  onHalloween(){
    localStorage.setItem("halloween", "on"); 
  }

  offHalloween(){
    localStorage.setItem("halloween", "off"); 
  }

  isHalloween(){
    if (localStorage.getItem("halloween")=== "on"){
      return true; 
    } else {
  return false; 
    }
  }

  
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



  onNavidad(){
    localStorage.setItem("navidad", "on"); 
  }

  offNavidad(){
    localStorage.setItem("navidad", "off"); 
  }

  isnavidad(){
    if (localStorage.getItem("Navidad")=== "on"){
      return true; 
    } else {
  return false; 
    }
  }



}
