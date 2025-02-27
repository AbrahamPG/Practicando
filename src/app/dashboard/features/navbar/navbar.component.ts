import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  styleUrl: 'navbar.component.css',
  imports: [
    RouterModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
})


export class NavbarComponent {
  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  cartCount = 4; // Inicialmente vacío

  addToCart() {
    this.cartCount++; // Aumenta cada vez que agregas un producto
  }


}
