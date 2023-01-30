import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestatairedto } from 'src/app/model/dto/prestatairedto.model';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';

@Component({
  selector: 'app-prestataire-add',
  templateUrl: './prestataire-add.component.html',
  styleUrls: ['./prestataire-add.component.css']
})
export class PrestataireAddComponent {

  prestataireFormGroup?:FormGroup
  submitted=false;

  constructor(private fb:FormBuilder,private vendeuse_prestatire:VendeusePrestaireService){

  }
  ngOnInit(): void {
    this.extincteur()
  }
  onSavePrestataire(){
    this.submitted=true;
    if(this.prestataireFormGroup?.invalid) return;
    const prestataire:Prestatairedto={
      nomcomplet: this.prestataireFormGroup?.value['nomcomplet'],
      tel:this.prestataireFormGroup?.value["tel"],
      fonction:this.prestataireFormGroup?.value["fonction"],
      avenue:this.prestataireFormGroup?.value["avenue"],
      numero:this.prestataireFormGroup?.value["numero"],
      commune:this.prestataireFormGroup?.value["commune"],
      reference:this.prestataireFormGroup?.value["reference"],
      quartier:this.prestataireFormGroup?.value["quartier"]
    }
   // console.log(prestataire)
    this.vendeuse_prestatire.savePrestataire(prestataire)
      .subscribe(data=>{
        //console.log(data)
        alert("Enregistré avec succès");
        this.extincteur()
      })
  }

  extincteur(){
    this.prestataireFormGroup=this.fb.group(
      {
        //"observation",
        tel:["+243",Validators.required],
        avenue:["",Validators.required],
        commune:['',Validators.required],
        fonction:['',Validators.required],
        reference:['',Validators.required],
        quartier:["",Validators.required],
        numero:["",Validators.required],
        nomcomplet:["",Validators.required]
      }
    );
  }
}
