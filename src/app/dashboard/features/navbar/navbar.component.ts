import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../../core/services/carrito.service';


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


export class NavbarComponent implements OnInit{
  menuOpen = false;
  constructor(private carritoService : CarritoService){}


  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  cartCount = 0; // Inicialmente vacío

  ngOnInit(){
    this.carritoService.cantidad$.subscribe(count => {
      this.cartCount = count
    })
  }


}
