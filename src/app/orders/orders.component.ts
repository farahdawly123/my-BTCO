import { Component } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  allOrders:any;
  specOrders:any;
  constructor(private _ServService:ServService){
    this._ServService.getAllOrders().subscribe(((data:any)=>{

      this.allOrders=Object.values(data)
    }))


  this._ServService.getSpecOrders().subscribe(((data:any)=>{

      this.specOrders=Object.values(data)
    }))

  }

}
