import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.scss']
})
export class HelpUsComponent {
  addInForm:FormGroup=new FormGroup({

    'name': new FormControl(null , [Validators.required]),
    'address': new FormControl(null ,[Validators.required]),
    'phone_number': new FormControl(null ,[Validators.required]),
    'location': new FormControl(null ,[Validators.required]),

  })
  constructor(private _ServService:ServService){}

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
