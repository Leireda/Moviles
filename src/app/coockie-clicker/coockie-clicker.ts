import { Component } from '@angular/core';


@Component({
  selector: 'app-coockie-clicker',
  imports: [],
  templateUrl: 'coockie-clicker.html', 
  styleUrls: ['./coockie-clicker.css']
})
export class CoockieClicker {
  cookies: number = 1; 
 clickCookie() {
    this.cookies += 1; 
    
    const cookieCountElement = document.getElementById('cookie-count');
    if (cookieCountElement) {
        cookieCountElement.textContent = this.cookies + " Galletas";
    }
}



}