import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'http://localhost:3333/products';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  create(product: Product): Observable<Product> | null {
    if (!product.name || !product.price) {
      this.showMessage('Informações necessárias');
      return null;
    }
    return this.http.post<Product>(this.baseUrl, product);
  }
}
