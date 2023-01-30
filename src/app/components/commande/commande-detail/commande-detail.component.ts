import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent {
  submitted=false;
  solde?:number;
  soldFormGroup?:FormGroup
  commandId:number
  commande$:Commandedto|null=null
  constructor (private commandeService:CommandeService,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,private router:Router
    ){
    this.commandId=activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.initCommande()

    this.soldFormGroup=this.fb.group(
      {
        //"observation",
        solde:[0,[Validators.required,Validators.min,Validators.max]],

      }
    );
  }
  initCommande(){
    this.commandeService.getCommande(this.commandId)
    .subscribe(data=>{
      this.commande$=data
      this.solde=this.commande$.total-this.commande$.solde
    })
  }

  solderCommande(){
    this.submitted=true
    if(this.soldFormGroup?.invalid) return;
    if(this.soldFormGroup?.value['solde']==0) return;
    if(this.commande$){

      this.commande$.solde=this.soldFormGroup?.value['solde']
    this.commandeService.updateCommande(this.commandId,this.commande$)
        .subscribe((data:Commandedto)=>{

          this.commande$=data
          this.solde=this.commande$.total-this.commande$.solde

        })

    }
  }

  commandes(){
    this.router.navigateByUrl('commande')
  }
}
