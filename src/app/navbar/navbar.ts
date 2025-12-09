import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LocalStorage } from '../services/local-storage';









@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, RouterLink, MatMenuModule, MatButtonModule, NgClass, CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{

   esHalloween: boolean = true; 
   esNavidad: boolean = true; 

  nombre:string | null =""; 

  constructor(private almacenamiento: LocalStorage){

  }


  ngOnInit(){
    this.nombre = this.almacenamiento.getNombre(); 
    this.esHalloween = this.almacenamiento.isHalloween(); 

    this.nombre = this.almacenamiento.getNombre(); 
    this.esNavidad = this.almacenamiento.isnavidad(); 
    
  }

  cambiarHalloween(){
    if(this.esHalloween){
       this.almacenamiento.onHalloween(); 
    } else {
      this.almacenamiento.offHalloween();
    }
    
  }

  

  cambiarNavidad(){
    if(this.esNavidad){
      this.almacenamiento.onNavidad(); 
    }else{
      this.almacenamiento.offNavidad(); 
    }
  }

   

  }



    
    
  

