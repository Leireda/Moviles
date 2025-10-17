import { Component, Input } from '@angular/core';
import { personaje } from '../../models/personaje.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fichapersonaje',
  imports: [CommonModule],
  templateUrl: './fichapersonaje.html',
  styleUrl: './fichapersonaje.css'
})
export class Fichapersonaje {

  @Input() character:personaje = new personaje('Aaron Hotchner', 'estadounidense', 5, 'imagen')

      getColorFondo():string{
          switch(this.character.raza.toLowerCase()){
            case 'estadounidense':
            return 'rgba(146, 0, 0, 1)';

            case 'ucraniana':
            return 'rgba(186, 11, 11, 1)';

            default:  
            return 'rgba(255, 255, 255, 1)';

          }
      }

      getEstrellas(): string[]{
        return Array(this.character.fuerza).fill('⭐');


      }
}
