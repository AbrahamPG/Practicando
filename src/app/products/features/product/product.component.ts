import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit{
  
  private productService = inject(ProductService)

  
  public products:Product[]=[]



  ngOnInit(): void {
    this.productService.getListProducts().subscribe(
      (rpta:Product[])=>{
        console.log(rpta)
        this.products = rpta
      }
    )
  }

  





}
