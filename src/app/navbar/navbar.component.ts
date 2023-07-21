import { Component ,HostListener  } from '@angular/core';
import { ServService } from '../serv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

isLoggedIn:boolean=false;

  //navbar scrolling effect
  isNavbarFixed = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_event: any) {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

  constructor(private _ServService:ServService, private _Router:Router){}
  logout() {

    this._ServService.logout().subscribe((data) => {
      console.log(data);
     if(data.msg=='you loged out successfully'){
      localStorage.removeItem('userToken');
        this._ServService.userData.next(null);
        this._Router.navigateByUrl('/login');
        alert(data.msg)
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
