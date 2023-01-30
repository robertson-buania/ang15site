import { Nomproduit } from "./nomproduit.model";

export interface ProductSaved{

  id?:number
  observation?:string,
  quantite:number,
  unite:string,
  quantitecontenanceparunite:number,
  quantiterupture:number,
  prixachat:number,
  datecreation:Date;
  prixvente:number,
  prixprestataire:number,
  nomproduit:string
}
