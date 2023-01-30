import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestatairedto } from '../model/dto/prestatairedto.model';
import { Prestataire } from '../model/prestataire.model';
import { Product } from '../model/product.model';
import {  Vendeuse } from '../model/vendeuse.model';
@Injectable({
  providedIn: 'root'
})
export class VendeusePrestaireService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Vendeuse
*/

  getAllVendeuse():Observable<Vendeuse[]>{
    return this.httpClient.get<Vendeuse[]>(`${this.host}vendeuse/all`)
  }

  getVendeuseDtos():Observable<Prestatairedto[]>{
    return this.httpClient.get<Prestatairedto[]>(`${this.host}vendeuse/autocomplete`)
  }
  saveVendeuse(vendeuse:Prestatairedto):Observable<Vendeuse>{
    return this.httpClient.post<Vendeuse>(`${this.host}vendeuse/save`,vendeuse)
  }

  getVendeuse(id:number):Observable<Vendeuse>{
    return this.httpClient.get<Vendeuse>(`${this.host}vendeuse/select?id=${id}`)
  }
  updateVendeuse(id:number,vendeuse:Vendeuse):Observable<Vendeuse>{
    return this.httpClient.put<Vendeuse>(`${this.host}vendeuse/update?id=${id}`,vendeuse)
  }

  /**
   *
   * @returns Prestataire
   */

  getAllPrestataire():Observable<Prestataire[]>{
    return this.httpClient.get<Prestataire[]>(`${this.host}prestataire/all`)
  }
  getPrestataireDtos():Observable<Prestatairedto[]>{
    return this.httpClient.get<Prestatairedto[]>(`${this.host}prestataire/autocomplete`)
  }

  savePrestataire(prestataire:Prestatairedto):Observable<Prestataire>{
    return this.httpClient.post<Prestataire>(`${this.host}prestataire/save`,prestataire)
  }

  getPrestataire(id:number):Observable<Prestataire>{
    return this.httpClient.get<Prestataire>(`${this.host}prestataire/select?id=${id}`)
  }
  updatePrestataire(id:number,prestataire:Prestataire):Observable<Prestataire>{
    return this.httpClient.put<Prestataire>(`${this.host}prestataire/update?id=${id}`,prestataire)
  }

}
