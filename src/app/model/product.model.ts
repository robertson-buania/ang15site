import { Nomproduit } from "./nomproduit.model";

export interface Product{

  id?:number
  observation?:string,
  quantite:number,
  unite:string,
  quantitecontenanceparunite:number,
  quantiterupture:number,
  prixachat:number,
  prixvente:number,
  prixprestataire:number,
  nomproduit:Nomproduit
}
