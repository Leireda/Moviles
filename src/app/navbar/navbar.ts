import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LocalStorage } from '../services/local-storage';








@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, RouterLink, MatMenuModule, MatButtonModule, NgClass, CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  nombre:string=""; 

  constructor(private almacenamiento: LocalStorage){

  }

  ngOnInit(){
    this.almacenamiento.getItem("nombre"); 
  }

    esHalloween:boolean = false; 

   
    }
    
  

