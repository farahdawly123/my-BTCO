import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import{FormControl , FormGroup ,Validators} from"@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
  this._ServService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data);

    if(data.msg=='you logged in successfully'){
       localStorage.setItem('userToken',data.token)
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
  }

}
