import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';








@Component({
  selector: 'app-halloween', 

  imports: [ReactiveFormsModule, MatDatepickerModule, MatCheckboxModule, CommonModule], 
  templateUrl: './halloween.html',
  styleUrl: './halloween.css'
})
export class Halloween {
       
     nocheHalloween: FormGroup; 

     
     constructor(private fb: FormBuilder){
      this.nocheHalloween = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        tipoInvitado: ['', Validators.required],
        disfraz: ['', Validators.required],
        fechaLlegada: ['', Validators.required], 
        aceptaReglas: [false, [Validators.requiredTrue]]
      })
     }
     
     mostrar(){
    if (this.nocheHalloween.invalid){
      console.log("el formulario contiene errores."); 
    } else {
      console.log(this.nocheHalloween.value)
    }
   
  }

    formEnviado = false;
    mensaje: String =""; 

      comprobar(){
      this.formEnviado = true; 
      console.log(this.nocheHalloween.value);

      if(this.nocheHalloween.invalid){
        console.log('el formularo tiene errores');
        Object.values(this.nocheHalloween.controls).forEach(control => {control.markAsTouched();});
        this.mensaje = ""; 
        return; 
      }

       const nombre = this.nocheHalloween.get('nombre')?.value;
       this.mensaje = '🎃 ¡Bienvenido/a, ${nombre}! Tu entrada para la fiesta del castillo ha sido registrada con éxito.'; 

       this.formEnviado = false; 

    }


}
