import { Component, Renderer2 } from '@angular/core';
import { ServService } from '../serv.service';
import{FormControl , FormGroup ,Validators} from"@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {

  // ngOnInit(): void {
  //   // Change the background of the navbar to bg-black
  //   const navbar = document.querySelector('.navbar');
  //   if (navbar) {
  //     navbar.classList.add('bg-black');
  //   }
  // }

  forgetPass:FormGroup=new FormGroup({

    'email': new FormControl(null , [Validators.required,Validators.email]),
    'password': new FormControl(null ,[Validators.required]),
    'password_confirmation':new FormControl(null ,[Validators.required])
  })

  submitForm(){
    if(this.forgetPass.invalid){
        return;
    }
  //------------------------------------------login api call------------------------------------
    console.log(this.forgetPass);
  this._ServService.forgetPass(this.forgetPass.value).subscribe((data)=>{
      console.log(data);

    if(data.message=="password changed successfully"){

        this._Router.navigateByUrl('/login');
        alert(data.message)
    }
    else{
        alert(data.message)
    }
  })

  }
  constructor(private _ServService:ServService ,private _Router:Router ,private renderer: Renderer2 ){

  }
}
