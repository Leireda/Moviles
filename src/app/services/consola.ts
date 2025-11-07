import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Consola {
  
  mostrarEnConsola(mensaje:string){

    console.log(mensaje); 

  }

}
