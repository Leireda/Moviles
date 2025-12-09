import { Component, model } from '@angular/core';
import { tareas } from '../models/tareas';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, DragDrop, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';







@Component({
  selector: 'app-kanban',
  imports: [CdkDropList, CdkDrag, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatMenu, MatMenuTrigger, CdkDropListGroup],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})

export class kanban{

    tareas: FormGroup; 
    
    k: number = 0; 
    todo: tareas[] = []; 
    done: tareas[] = []; 
    doing: tareas[] = []; 

     constructor(private fb: FormBuilder){
    this.tareas = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['',[Validators.required]]
      })
  }


  

  drop(event: CdkDragDrop<tareas[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


   mostrar(){
    if (this.tareas.invalid) {
      console.log('El formulario contiene errores');
      Object.values(this.tareas.controls).forEach(control => {control.markAsTouched();});
    }

    else {
      console.log(this.tareas.value);
      this.añadir(this.todo, this.tareas.get('nombre')?.value, this.tareas.get('descripcion')?.value)
      this.tareas.reset();
    }
  }

  borrar(lista:tareas[], tareas:tareas ){
    for(this.k = 0; this.k < lista.length; this.k++){
      if(lista[this.k].id == tareas.id) {
        lista.splice(this.k, 1)
      }
    }
  }

  añadir(lista:tareas[], tarea:string, descripcion:string) {
    lista.push({
      id: crypto.randomUUID(),
      nombre: tarea,
      descripcion: descripcion
    } )
  }
}











