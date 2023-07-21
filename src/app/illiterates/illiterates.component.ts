import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-illiterates',
  templateUrl: './illiterates.component.html',
  styleUrls: ['./illiterates.component.scss']
})
export class IlliteratesComponent {
  premOrders:any;

constructor(private _ServService:ServService){
  this._ServService.getallill().subscribe(((data:any)=>{

    this.premOrders=Object.values(data)
  }))
}

addInForm:FormGroup=new FormGroup({

  'name': new FormControl(null , [Validators.required]),
  'address': new FormControl(null ,[Validators.required]),
  'phone_number': new FormControl(null ,[Validators.required]),
  'location': new FormControl(null ,[Validators.required]),


})

submitForm(){
  if(this.addInForm.invalid){
      return;
  }
  console.log(this.addInForm);
this._ServService.addInform(this.addInForm.value).subscribe((data)=>{
    console.log(data);

  if(data.message=='inserting created successfully'){
    alert(data.message)

  }
  else{
      alert(data.message)
  }
})

}

}
