import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorage } from '../services/local-storage';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario{

     formulario: FormGroup; 

     constructor(private fb: FormBuilder, private almacenamiento: LocalStorage) {
      
      this.formulario = this.fb.group({
        nombre: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
      });
  
     }

  mostrar(){
    if (this.formulario.invalid){
      console.log("el formulario contiene errores."); 
    } else {
      console.log(this.formulario.value)
      this.almacenamiento.setItem("nombre", this.formulario.value.nombre);
    }
   
  }
resetear(){
  this.formulario.reset({
    nombre: '',
    email: '',
  });
}
}
