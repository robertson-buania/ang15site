import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commandedto } from '../model/dto/commandedto.model';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Commande
*/

  getAllCommande():Observable<Commandedto[]>{
    return this.httpClient.get<Commandedto[]>(`${this.host}commande/all`)
  }


  saveCommandeVendeuse(commande:Commandedto):Observable<Commandedto>{
    return this.httpClient.post<Commandedto>(`${this.host}commande/savevend`,commande)
  }
  saveCommandePrestataire(commande:Commandedto):Observable<Commandedto>{
    return this.httpClient.post<Commandedto>(`${this.host}commande/saveprest`,commande)
  }
  getCommande(id:number):Observable<Commandedto>{
    return this.httpClient.get<Commandedto>(`${this.host}commande/select?id=${id}`)
  }
  updateCommande(id:number,commande:Commandedto):Observable<Commandedto>{
    return this.httpClient.put<Commandedto>(`${this.host}commande/update?id=${id}`,commande)
  }

}
