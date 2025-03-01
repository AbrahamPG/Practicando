import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../products/features/product.model';



@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: Product[] = [];
  private carritoSubject = new BehaviorSubject<Product[]>([]);
  private cantidadSubject = new BehaviorSubject<number>(0);

  carrito$ = this.carritoSubject.asObservable();
  cantidad$ = this.cantidadSubject.asObservable();

  agregarProducto(producto: Product) {
    const index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.carrito[index].stock += 1;
    } else {
      this.carrito.push({ ...producto, stock: 1 });
    }
    this.actualizarEstado();
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.actualizarEstado();
  }

  actualizarCantidad(id: number, cantidad: number) {
    const index = this.carrito.findIndex(p => p.id === id);
    if (index !== -1 && cantidad > 0) {
      this.carrito[index].stock = cantidad;
    } else {
      this.eliminarProducto(id);
    }
    this.actualizarEstado();
  }

  resetearCarrito() {
    this.carrito = [];
    this.actualizarEstado();
  }

  obtenerCarrito() {
    return this.carritoSubject.asObservable();
  }

  cantidadProductos() {
    return this.cantidad$;
  }

  private actualizarEstado() {
    this.carritoSubject.next([...this.carrito]);
    const totalCantidad = this.carrito.reduce((sum, p) => sum + p.stock, 0);
    this.cantidadSubject.next(totalCantidad);
  }
}
