import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient)

    private apiUrl = environment.apiUrl

    // Obtener productos con paginación
  getProductsPaginated(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      catchError(error => {
        console.warn('Error en la API', error);
        return throwError(() => new Error('Error al obtener productos'));
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