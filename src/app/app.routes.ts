import { Routes } from '@angular/router';
import { Matatopos } from './matatopos/matatopos';
import { Carrera } from './carrera/carrera';
import { EyeCandy } from './eye-candy/eye-candy';
import { Contador } from './contador/contador';
import { Listapersonajes } from './personajes/listapersonajes/listapersonajes';

export const routes: Routes = [
    {path:'contador', component: Contador},
    {path: 'matatopos', component: Matatopos}, 
    {path: 'carrera', component:Carrera},
    {path: 'eye-candy', component: EyeCandy},
    {path: 'listapersonajes', component: Listapersonajes}
    
];
