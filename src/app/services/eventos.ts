import { Injectable } from '@angular/core';
import { Halloween } from '../halloween/halloween';

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
      fondo="/public/fondo-halloween";{

      } 
    } else if(this.eventoActual="navidad"){
      fondo="/assest/images/fondonavidad.png"; 
    }

    return fondo;
  }

   
  
  
}


