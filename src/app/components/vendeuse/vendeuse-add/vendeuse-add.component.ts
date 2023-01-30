import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestatairedto } from 'src/app/model/dto/prestatairedto.model';
import { ProductsService } from 'src/app/services/products.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';

@Component({
  selector: 'app-vendeuse-add',
  templateUrl: './vendeuse-add.component.html',
  styleUrls: ['./vendeuse-add.component.css']
})
export class VendeuseAddComponent {
  vendeuseFormGroup?:FormGroup
  submitted=false;

  constructor(private fb:FormBuilder,private vendeuse_prestatire:VendeusePrestaireService){

  }
  ngOnInit(): void {
    this.extinction()
  }
  onSaveVendeuse(){
    this.submitted=true;



    if(this.vendeuseFormGroup?.invalid) return;
    console.log(this.vendeuseFormGroup?.value)
    const vendeuse={
      nomcomplet: this.vendeuseFormGroup?.value['nomcomplet'],
      tel:this.vendeuseFormGroup?.value["tel"],

      avenue:this.vendeuseFormGroup?.value["avenue"],
      numero:this.vendeuseFormGroup?.value["numero"],
      commune:this.vendeuseFormGroup?.value["commune"],
      reference:this.vendeuseFormGroup?.value["reference"],
      quartier:this.vendeuseFormGroup?.value["quartier"]
    }

    this.vendeuse_prestatire.saveVendeuse(vendeuse)
      .subscribe(data=>{
        alert("Enregistré avec succès");
        this.extinction()
      })
  }

  extinction(){
    this.vendeuseFormGroup=this.fb.group(
      {
        //"observation",
        tel:["+243",Validators.required],
        avenue:["",Validators.required],
        commune:['',Validators.required],
        reference:['',Validators.required],
        quartier:["",Validators.required],
        numero:["",Validators.required],
        nomcomplet:["",Validators.required]
      }
    );
  }
}
