import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Achat } from 'src/app/model/achat.model';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { Prestatairedto } from 'src/app/model/dto/prestatairedto.model';
import { ProductSaved } from 'src/app/model/productsaved.model';
import { Produitachat } from 'src/app/model/produitachat.model';
import { Produitcommande } from 'src/app/model/produitcommande.model';
import { AchatService } from 'src/app/services/achat.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ProductsService } from 'src/app/services/products.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';

@Component({
  selector: 'app-achat-add',
  templateUrl: './achat-add.component.html',
  styleUrls: ['./achat-add.component.css']
})
export class AchatAddComponent {


  achatFormGroup?:FormGroup

  keyword = 'nomproduit';
  data? :ProductSaved[];

  nom?:string
  productList:any|Produitachat[]=[];
  produitachatFormGroup?:FormGroup
  client?:string;
  buttonActivated=false;
  message?:string

  submitted=false;
  somme=0;
  constructor(private fb:FormBuilder,private achatService:AchatService,
    private productservice:ProductsService){}
  ngOnInit(): void {
    this.productservice.getAllProductDtos()
      .subscribe(prods=>{
        this.data=prods
      })

      this.extincteur()
  }


  okAchat(){
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
      prix: this.produitachatFormGroup?.value["prix"],
      quantite:this.produitachatFormGroup?.value["quantite"],
      unite:prod[0].unite,
      datecreation:new Date(),
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
    this.productList.forEach((prod:Produitachat) => {
      this.somme+=(prod.prix*prod.quantite)
    });
    return this.somme;
  }


  annulerAchat(){
    this.productList=[]
    this.somme=0;
  }
  selectEvent(item:ProductSaved) {
    this.nom=item.nomproduit

    //console.log(this.nom);
  }



  facturerAchat(){
    this.submitted=true;

      if(this.productList){
        const achat:Achat={
          montant:this.sommeToProductList(),
          reference:this.achatFormGroup?.value["reference"],
          datecreation:new Date(),
          utilisateur:{
            id:1
          },
          produitachats:this.productList,

        }
        this.buttonActivated=false
        if(achat.montant>0){
          this.achatService.saveAchat(achat)
          .subscribe(data=>{
            alert("Achat bien enregistré !")
            this.buttonActivated=true
            this.extincteur()
          })
        }else{
          alert("Remplissez les infos d'achat")
        }



      }



  }

  extincteur(){

    this.productList=[]
    this.produitachatFormGroup=this.fb.group(
      {
        //"observation",
        nomproduit:["",Validators.required],
        quantite:[1,Validators.required],
        prix:[0.00,Validators.required]
      }
    );

    this.achatFormGroup=this.fb.group(
      {
        reference:["",Validators.required]
      }
    );
  }

}
