import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

topo:number =0;



topomover(){
this.topo = 1;


this.topo = Math.floor(Math.random() * 9) + 1;


}



}








  

   


    
  
  

  





  

  

