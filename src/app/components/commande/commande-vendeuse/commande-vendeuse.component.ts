import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { Prestatairedto } from 'src/app/model/dto/prestatairedto.model';
import { ProductSaved } from 'src/app/model/productsaved.model';
import { Produitcommande } from 'src/app/model/produitcommande.model';
import { CommandeService } from 'src/app/services/commande.service';
import { ProductsService } from 'src/app/services/products.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';

@Component({
  selector: 'app-commande-vendeuse',
  templateUrl: './commande-vendeuse.component.html',
  styleUrls: ['./commande-vendeuse.component.css']
})
export class CommandeVendeuseComponent {

  buttonActive=true;
  keyword = 'nomproduit';
  keywordvendeuse = 'nomcomplet';
  data? :ProductSaved[];
  datavendeuse? :Prestatairedto[];
  nom?:string
  productList:any|Produitcommande[]=[];
  produitachatFormGroup?:FormGroup
  client?:string;
  commandeachatFormGroup?:FormGroup

  message?:string

  submitted=false;
  somme=0;
  constructor(private fb:FormBuilder,private productservice:ProductsService,
    private prestataireVendeuseService:VendeusePrestaireService,
    private commandeService:CommandeService){}
  ngOnInit(): void {
    this.productservice.getAllProductDtos()
      .subscribe(prods=>{
        this.data=prods
      })
      this.prestataireVendeuseService.getVendeuseDtos()
      .subscribe(vends=>{
        this.datavendeuse=vends
      })
      this.produitachatFormGroup=this.fb.group(
        {
          //"observation",
          nomproduit:["",Validators.required],
          quantite:[1,Validators.required],
          prix:["prixvente",Validators.required]
        }
      );
      this.commandeachatFormGroup=this.fb.group(
        {
          //"observation",
          solde:[0,Validators.required]
        }
      );
  }


  okCommande(){
    //console.log(,this.nom)

    const prix=this.produitachatFormGroup?.value["prix"];
    if(this.nom){
      const prodExiste=this.productList.filter((d:any)=> d.nomproduit.nom==this.nom)
      //console.log(this.nom)
      if(prodExiste[0]){
        prodExiste[0].quantite+=this.produitachatFormGroup?.value["quantite"]
       // console.log(prodExiste)
      }else{
        const prod:any= this.data?.filter(d=> d.nomproduit==this.nom)
     this.productList.push({
      prix: prod[0].prixvente,
      quantite:this.produitachatFormGroup?.value["quantite"],
      unite:prod[0].unite,
      datecreation:new Date(),
      prixachat:prod[0].prixachat,
      nomproduit:{
        nom:prod[0].nomproduit
      }
    })
   // console.log(this.productList)
      }

    }
   this.sommeToProductList()
  }
  sommeToProductList(){
    this.somme=0;
    this.productList.forEach((prod:Produitcommande) => {
      this.somme+=(prod.prix*prod.quantite)
    });
    return this.somme;
  }


  annulerCommande(){
    this.productList=[]
    this.somme=0;
  }
  selectEvent(item:ProductSaved) {
    this.nom=item.nomproduit

    //console.log(this.nom);
  }

  selectVendeuseEvent(item:any){
    this.client=item.nomcomplet;
   // c
  }

  facturerCommande(){
    this.submitted=true;
    const startDate=new Date();
   // console.log(this.client)
    const client:any=this.datavendeuse?.filter(d=> d.nomcomplet==this.client)
    //console.log(client[0])

    if(client[0]){
      if(this.productList){
        const commande:Commandedto={
          numero:`${startDate.getFullYear()}${startDate.getDay()}${startDate.getHours()}${startDate.getMinutes()}J${Math.floor(Math.random() * 100) + 1}`,
          solde:this.commandeachatFormGroup?.value["solde"],
          total:this.sommeToProductList(),
          id:client[0].id,
          datecreation:new Date(),
          produitcommandes:this.productList,

        }
        if(commande.total>0){
          this.buttonActive=false
          this.commandeService.saveCommandeVendeuse(commande).subscribe(data=>{

            alert("Commande effectuée avec succès !")
            this.buttonActive=true
            this.extinction()
          })
        }else {
          alert('La commande est vide ')
        }
        //console.log(commande)

      }

    }else {
      this.submitted=false;
      this.message="Le prestataire du nom de "+this.client+" n'est pas reconnu, vérifiez l'orthographe ou veuillez l'enregistrer en premier dans comme vendeuse"
    }

  }

  extinction(){
    this.productList=[]
    this.somme=0
    this.commandeachatFormGroup=this.fb.group(
      {
        //"observation",
        solde:[0,Validators.required]
      }
    );

  }
}
