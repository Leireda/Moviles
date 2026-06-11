import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Importaciones de Angular Material que usaremos más adelante
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Perro {
  nombre: string;
  raza: string;
  edad: number;
}

@Component({
  selector: 'app-perro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './perro.html',
  styleUrls: ['./perro.css']
})

export class PerrosComponent implements OnInit {
  perroForm!: FormGroup;
  listaPerros: Perro[] = []; // Aquí guardaremos los perros registrados

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // 1. Creación del formulario con los 3 campos exactos
    this.perroForm = this.fb.group({
      nombre: ['', Validators.required], // Campo obligatorio
      raza: [''],
      edad: ['']
    });
  }

  // Método para el botón de envío
  agregarPerro(): void {
    if (this.perroForm.valid) {
      this.listaPerros.push(this.perroForm.value);
      this.perroForm.reset(); // Limpia el formulario tras enviar
    }
  }
}