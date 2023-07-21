import { Component } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  allUsers:any;
  feedbacks:any;

  constructor(private _ServService:ServService ){



    this._ServService.allUsers().subscribe(((data:any)=>{

      this.allUsers=Object.values(data)
    }))

    this._ServService.feedback().subscribe(((data:any)=>{

      this.feedbacks=Object.values(data)
    }))
  }
}
