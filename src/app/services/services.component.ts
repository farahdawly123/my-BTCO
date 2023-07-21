import { Component  } from '@angular/core';
import { ServService } from '../serv.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
packageListBasic:any[]=[];
  packageListPremium: any[]=[];
  packageListStan: any[]=[];

  data = { name: 'Basic Package', age: 42 }
  dataTwo={ name: 'Yassin'}
  dataThree={ name: 'bego'}
  packInfo: any;
  packId:any;
  constructor(private _ServService:ServService ,private _router:Router){
    this._ServService.getServiceContent().subscribe(((data:any)=>{
    this.packageListBasic=Object.values(data)
    this.packId=data[0].id;
    console.log(this.packId);
    }))
  }


  
  };




