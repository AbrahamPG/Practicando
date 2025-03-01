import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient)

    private apiUrl = environment.apiUrl

    getListProducts(): Observable<any> {
        return this.http.get<any>(this.apiUrl).pipe(
            catchError(error => {
                console.warn('Error en la API', error);
                throw error;
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