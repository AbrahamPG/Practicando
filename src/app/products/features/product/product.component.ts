import { MatInputModule } from '@angular/material/input';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product.model';
import { CarritoService } from '../../../core/services/carrito.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';


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
  public displayedProducts: Product[] = [] //Productos de la pagina actual
  public cantidadProductos: number = 0; // Contador de productos en el carrito
  public pageSize = 8; // Cantidad de productos por página
  public totalItems = 0;
  public currentPage = 0; //actual pagina

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Referencia al paginator

  ngAfterViewInit() {
    this.paginator.page.subscribe((event) => this.onPageChange(event));
  }

  ngOnInit(): void {
    this.productService.getListProducts().subscribe(
      (rpta:Product[])=>{
        console.log(rpta)
        this.products = rpta;
        this.totalItems = this.products.length;
        this.updateDisplayedProducts();
      }
    )

  // Suscribirse a la cantidad de productos en el carrito
    this.cartService.cantidad$.subscribe(
      (cantidad: number) => {
        this.cantidadProductos = cantidad;
      }
    );

  }


  updateDisplayedProducts(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }

  // Se ejecuta cuando cambia la paginación
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedProducts();
  }

  

  // Método para agregar producto al carrito
  agregarAlCarrito(producto: Product): void {
    this.cartService.agregarProducto(producto);
  }



}
