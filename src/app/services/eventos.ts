import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Eventos {
  
  eventoActual:String="normal"; 

  cambiarEvento(nuevoEvento:String){

    this.eventoActual=nuevoEvento; 
    
  }

  getFondo(){
    let fondo="/assest/images/fondonormal.png"; 
    if(this.eventoActual="halloween"){
      fondo="/assest/images/fondohalloween.png"; 
    } else if(this.eventoActual="navidad"){
      fondo="/assest/images/fondonavidad.png"; 
    }

    return fondo;
  }

}
