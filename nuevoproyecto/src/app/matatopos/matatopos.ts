import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';







@Component({
  selector: 'app-matatopos',
  imports: [CommonModule ],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

  topos: number[]=[0, 1, 0,0,1,1,0,0]; 

  mataTopo(index:number){
    console.log (index); 
    let nuevoTopo=Math.floor(Math.random()*9); 
console.log (nuevoTopo); 
while (nuevoTopo==index){
  nuevoTopo=Math.floor(Math.random()*9); 


}

this.topos=[0,0,0,0,0,0,]; 
this.topos=[]


  }

}
