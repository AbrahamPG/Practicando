import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product.model';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit{
  
  private productService = inject(ProductService)
  private cartService = inject(CarritoService)

  
  public products:Product[]=[]
  public cantidadProductos: number = 0; // Contador de productos en el carrito


  ngOnInit(): void {
    this.productService.getListProducts().subscribe(
      (rpta:Product[])=>{
        console.log(rpta)
        this.products = rpta
      }
    )

  // Suscribirse a la cantidad de productos en el carrito
    this.cartService.cantidad$.subscribe(
      (cantidad: number) => {
        this.cantidadProductos = cantidad;
      }
    );

  }

  

  // Método para agregar producto al carrito
  agregarAlCarrito(producto: Product): void {
    this.cartService.agregarProducto(producto);
  }



}
