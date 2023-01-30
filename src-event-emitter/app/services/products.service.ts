import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private host=environment.host;
  constructor(private httpClient:HttpClient) { }


  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }

  getSelectedProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?selected=true")
  }

  getAvailableProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?available=true")
  }

  searchProduct(name:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?name_like="+name)
  }

  selectProduct(p:Product):Observable<Product>{
    p.selected=!p.selected;
    return this.httpClient.put<Product>("http://localhost:3000/products/"+p.id,p)
  }

  deleteProduct(p:Product):Observable<void>{
    return this.httpClient.delete<void>("http://localhost:3000/products/"+p.id)
  }
  saveProduct(p:Product):Observable<Product>{
    return this.httpClient.post<Product>("http://localhost:3000/products",p)
  }

  getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:3000/products/"+id)
  }
  updateProduct(product:Product):Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:3000/products/"+product.id,product)
  }
}
