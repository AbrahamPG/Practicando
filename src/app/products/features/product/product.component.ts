import { MatInputModule } from '@angular/material/input';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product.model';
import { CarritoService } from '../../../core/services/carrito.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit{
  
  private productService = inject(ProductService)
  private cartService = inject(CarritoService)

  
  public products:Product[]=[]
  public cantidadProductos: number = 0; // Contador de productos en el carrito
  public pageSize = 8; // Cantidad de productos por página
  public totalItems = 0;
  public currentPage = 1; //actual pagina

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Referencia al paginator

  ngAfterViewInit() {
    this.paginator.page.subscribe((event) => this.onPageChange(event));
  }

  ngOnInit(): void {
    this.loadProducts(this.currentPage)

  // Suscribirse a la cantidad de productos en el carrito
    this.cartService.cantidad$.subscribe(
      (cantidad: number) => {
        this.cantidadProductos = cantidad;
      }
    );

  }



  loadProducts(page: number): void {
    this.productService.getProductsPaginated(page).subscribe(response => {
      this.products = response.results; // La API devuelve los productos en "results"
      this.totalItems = response.count; // La API devuelve el total de productos en "count"
    });
  }


  // Se ejecuta cuando cambia la paginación
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1; // Angular usa índice 0, pero la API usa índice 1
    this.loadProducts(this.currentPage);
  }

  

  // Método para agregar producto al carrito
  agregarAlCarrito(producto: Product): void {
    this.cartService.agregarProducto(producto);
  }



}
