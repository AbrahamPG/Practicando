import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient)

    getListProducts():Observable<any>{
        const url = 'http://127.0.0.1:8000/productos/v1/products/'
        return this.http.get<any>(url)
    } 
    
}