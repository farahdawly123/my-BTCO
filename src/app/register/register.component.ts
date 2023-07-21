import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import{FormControl , FormGroup ,Validators} from"@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
    console.log(this.registerForm);
  this._ServService.register(this.registerForm.value).subscribe((data)=>{
      console.log(data);

    if(data.msg=='you registered successfully'){
      localStorage.setItem('userToken', data.token)
      this._ServService.saveUserData()
        this._Router.navigateByUrl('/home');
        alert(data.msg)
    }
    else{
        alert(data.msg)
    }
  })
  }
  constructor(private _ServService:ServService ,private _Router:Router ){

}}
