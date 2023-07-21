import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  loginForm:FormGroup=new FormGroup({

    'email': new FormControl(null , [Validators.required,Validators.email]),
    'password': new FormControl(null ,[Validators.required]),

  })
  submitForm(){
    if(this.loginForm.invalid){
        return;
    }
  //------------------------------------------login api call------------------------------------
    console.log(this.loginForm);
  this._ServService.loginAdmin(this.loginForm.value).subscribe((data)=>{
      console.log(data);

    if(data.msg=='you logged in successfully'){
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
