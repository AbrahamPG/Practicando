import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient)

    private apiWeb = 'https://djangoapi-2xnu.onrender.com/productos/v1/products/';
    private apiLocal = 'http://127.0.0.1:8000/productos/v1/products/';

    getListProducts(): Observable<any> {
        return this.http.get<any>(this.apiWeb).pipe(
            catchError(error => {
                console.warn('Error en la API web, conectando a la API local...', error);
                return this.http.get<any>(this.apiLocal);
            })
        );
    }


}












// getListProducts():Observable<any>{
    //     const url ='http://127.0.0.1:8000/productos/v1/products/'
        
    //     return this.http.get<any>(url)
    // } 
 // 'http://127.0.0.1:8000/productos/v1/products/'
        // 'https://djangoapi-2xnu.onrender.com/productos/v1/products/'