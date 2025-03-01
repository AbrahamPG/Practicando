import { Component } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';
import { Product } from '../../../products/features/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {




  carrito: Product[] = [];

  constructor(private carritoService: CarritoService) {
    this.carritoService.carrito$.subscribe(productos => {
      this.carrito = productos;
    });
  }

  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
  }

  actualizarCantidad(producto: Product, cantidad: string) {
    const nuevaCantidad = parseInt(cantidad, 10) || 1;
    this.carritoService.actualizarCantidad(producto.id, nuevaCantidad);
  }
  

  resetear() {
    this.carritoService.resetearCarrito();
  }

  get totalProductos(): number {
    return this.carrito.reduce((acc, producto) => acc + producto.stock, 0);
  }
  
  get totalPagar(): number {
    return this.carrito.reduce((acc, producto) => acc + (producto.stock * producto.price), 0);
  }
  
  procesarPago() {
    alert(`Gracias por tu compra. Total a pagar: S/ ${this.totalPagar.toFixed(2)}`);
    this.resetear(); // Vacía el carrito después del pago
  }
  



}
