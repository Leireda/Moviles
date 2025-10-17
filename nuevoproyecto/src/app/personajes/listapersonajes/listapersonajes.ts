import { Component } from '@angular/core';
import { Fichapersonaje } from '../fichapersonaje/fichapersonaje';
import { personaje } from '../../models/personaje.models';

@Component({
  selector: 'app-listapersonajes',
  imports: [Fichapersonaje],
  templateUrl: './listapersonajes.html',
  styleUrl: './listapersonajes.css'
})
export class Listapersonajes {

personajes:personaje[]= [
  new personaje('Aaron Hotchner', 'estadounidense', 5, 'https://vader.news/__export/1651367392241/sites/gadgets/img/2022/04/30/aaron_hotchner_criminal_minds_2_1.jpg_691115875.jpg'),
  new personaje('Jennifer Jareau', 'estadounidense', 3, 'https://th.bing.com/th/id/R.da72b2d5ed45ef01654561f60d4a9717?rik=V3fUusLFZvEroA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f11500000%2fJJ-criminal-minds-girls-11512150-334-500.jpg&ehk=GGm0lTtbmuiSTwpr5OnTbeyeM%2fwO%2bY0AkjOwRduBgZ4%3d&risl=&pid=ImgRaw&r=0'),
  new personaje('Emily Prentiss', 'ucraniana', 4, 'https://tvcinemaemusica.files.wordpress.com/2010/06/18804609.jpg?w=199'),
  new personaje('Spencer Reid', 'estadounidense', 3, 'https://tse1.mm.bing.net/th/id/OIP.6uy_TtjpOkjErOvCO6POwgHaJe?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'),
  new personaje('Derek Morgan', 'estadounidense', 4, 'https://tse1.mm.bing.net/th/id/OIP.F8NY1AVYHuCyl-bRMnd0TQAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'),
  new personaje('Penelope Garcia', 'estadounidense', 3, 'https://i.pinimg.com/736x/de/f7/70/def7703ce22c063459ba3083dbb7e0e1.jpg'),
]

}



