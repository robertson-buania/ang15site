import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { ProductSaved } from '../model/productsaved.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }



  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.host}produit/all`)
  }
  getAllProductDtos():Observable<ProductSaved[]>{
    return this.httpClient.get<ProductSaved[]>(`${this.host}produit/autocomplete`)
  }

 

  searchProduct(name:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?name_like="+name)
  }


  saveProduct(p:ProductSaved):Observable<ProductSaved>{
    return this.httpClient.post<ProductSaved>(`${this.host}produit/save`,p)
  }

  getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.host}produit/select?id=${id}`)
  }
  updateProduct(id:number,product:ProductSaved):Observable<ProductSaved>{
    return this.httpClient.put<ProductSaved>(`${this.host}produit/update?id=${id}`,product)
  }
}
