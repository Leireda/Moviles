import { Routes } from '@angular/router';
import { Matatopos } from './matatopos/matatopos';
import { Carrera } from './carrera/carrera';
import { EyeCandy } from './eye-candy/eye-candy';
import { Contador } from './contador/contador';
import { Listapersonajes } from './personajes/listapersonajes/listapersonajes';
import { Formulario } from './formulario/formulario';
import { Halloween } from './halloween/halloween';
import { kanban } from './kanban/kanban';
import { CoockieClicker } from './coockie-clicker/coockie-clicker';



export const routes: Routes = [
    {path:'contador', component: Contador},
    {path: 'matatopos', component: Matatopos}, 
    {path: 'carrera', component:Carrera},
    {path: 'eye-candy', component: EyeCandy},
    {path: 'listapersonajes', component: Listapersonajes},
    {path: 'formulario', component: Formulario},
    {path: 'halloween', component: Halloween},
    {path: 'kanban', component: kanban}, 
    {path: 'cookie-clicker', component: CoockieClicker}
    
];
