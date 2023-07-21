
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-pay-form-tw',
  templateUrl: './pay-form-tw.component.html',
  styleUrls: ['./pay-form-tw.component.scss']
})
export class PayFormTwComponent {
  name!: string;
  age!: number;

  value!:any
  formId!: string;
  showDropdown= false;

formType!:string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.formType = params['type'];

      this.name = params['name'];
      this.age = params['age'];

      this.formId = params['formId'];
      console.log('Name:', this.name); // log the name value
      console.log('Age:', this.age); // log the age value
      if (this.formId === 'form2' || this.formId === 'form3') {
       this.showDropdown= true;
        }

    });
  }
}

