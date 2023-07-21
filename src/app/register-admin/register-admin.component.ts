import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {
  registerForm:FormGroup=new FormGroup({
    'name':new FormControl(null ,[Validators.required]),
    'email': new FormControl(null , [Validators.required,Validators.email]),
    'password': new FormControl(null ,[Validators.required , Validators.minLength(6)]),
    'phone_number': new FormControl(null ,[Validators.required ,Validators.min(11)]),
    'password_confirmation': new FormControl (null , [Validators.required, Validators.minLength(6)])
  })
  submitForm(){
    if(this.registerForm.invalid){
        return;
    }
  //------------------------------------------login api call------------------------------------
    console.log(this.registerForm);
  this._ServService.registerAdmin(this.registerForm.value).subscribe((data)=>{
      console.log(data);

    if(data.msg=='you registered successfully'){
      localStorage.setItem('userToken', data.token)
      this._ServService.saveUserData()
        this._Router.navigateByUrl('/dashboard');
    }
    else{
        alert(data.msg)
    }
  })

  }
  constructor(private _ServService:ServService ,private _Router:Router ){

}
}
