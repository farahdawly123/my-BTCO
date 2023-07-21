import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

allOrders: any;
premOrders: any;
allUsers: any;
feedbacks:any;
isLoggedIn:boolean=false;



constructor(private _ServService:ServService ,private _Router:Router ){




  this._ServService.allUsers().subscribe(((data:any)=>{

    this.allUsers=Object.values(data)
  }))

  this._ServService.feedback().subscribe(((data:any)=>{

    this.feedbacks=Object.values(data)
  }))
}
logout() {

  this._ServService.logoutAdmin().subscribe((data) => {
    console.log(data);
   if(data.msg=='you loged out successfully'){
    localStorage.removeItem('userToken');
      this._ServService.userData.next(null);
      this._Router.navigateByUrl('/login');
    }
    else{
      alert(data.msg)
    }

  });
}
ngOnInit(): void {
  this._ServService.userData.subscribe((userData) => {
    if (userData) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  });
}
}



