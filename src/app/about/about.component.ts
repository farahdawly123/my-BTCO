import { Component,OnInit ,Renderer2} from '@angular/core';
import { ServService } from '../serv.service';
import jwtDecode from 'jwt-decode';

interface DecodedToken {
  sub: string;
  name: string;
  iat: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
 illData:any;




  constructor(private _ServService:ServService ,private renderer: Renderer2) {}
  ngOnInit(): void {
    // Change the background of the navbar to bg-black
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('bg-black');
    }
  }






}

