import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import{FormControl , FormGroup ,Validators} from"@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showMessage:any;
  message:any;
  contactForm:FormGroup=new FormGroup({


    'user_message': new FormControl(null ,[Validators.required]),

  })
  submitForm(){
    if(this.contactForm.invalid){
        return;
    }
  //------------------------------------------login api call------------------------------------
    console.log(this.contactForm);
  this._ServService.contact(this.contactForm.value).subscribe((data)=>{
      console.log(data);

    if(data.msg=='Thank you for your interaction!'){
      localStorage.setItem('userToken', data.token)
      this.showMessage = true;
      this.message = 'Thank you for your interaction!';
    }
    else{
        alert(data.msg)
    }
  })

  }
  constructor(private _ServService:ServService ,private _Router:Router ){

  }
}
