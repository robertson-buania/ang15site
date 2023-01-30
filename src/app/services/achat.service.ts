import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Achat } from '../model/achat.model';
import { Achatdto } from '../model/dto/achatdto.model';
@Injectable({
  providedIn: 'root'
})
export class AchatService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
achat
*/

  getAllAchats():Observable<Achatdto[]>{
    return this.httpClient.get<Achatdto[]>(`${this.host}achat/all`)
  }


  saveAchat(achat:Achat):Observable<Achat>{
    return this.httpClient.post<Achat>(`${this.host}achat/save`,achat)
  }

  getAchat(id:number):Observable<Achatdto>{
    return this.httpClient.get<Achatdto>(`${this.host}achat/select?id=${id}`)
  }
 

}
