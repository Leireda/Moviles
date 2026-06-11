import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerrosComponent } from './perro/perro'; // <-- 1. Cambia 'Perro' por 'PerroComponent'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerrosComponent], // <-- 2. Cambia 'Perro' por 'PerroComponent' aquí también
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'recuperacion';
}