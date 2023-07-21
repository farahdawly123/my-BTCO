import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServService } from '../serv.service';

interface PackageType {
  id: number;
  package_type: string;
}

@Component({
  selector: 'app-payform',
  templateUrl: './payform.component.html',
  styleUrls: ['./payform.component.scss']
})
export class PayformComponent implements OnInit {

  packageListType: any;
  workspaces: any;
  illiterateDetails: string = '';
  workspaceDetails: string = '';

  PayForm: FormGroup = new FormGroup({
    'packagetype': new FormControl('', [Validators.required]),
    'numOfPeople': new FormControl('', [Validators.required]),
    'user_university': new FormControl('', [Validators.required]),
    'workspace': new FormControl('', []),
    'credit_card_number': new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]),
    'credit_card_cvv': new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)]),
  });

  clearInputs() {
    this.PayForm.controls['packagetype'].setValue('');
    this.PayForm.controls['numOfPeople'].setValue('');
    this.PayForm.controls['user_university'].setValue('');
    this.PayForm.controls['workspace'].setValue('');
    this.PayForm.controls['credit_card_number'].setValue('');
    this.PayForm.controls['credit_card_cvv'].setValue('');
  }
  constructor(private route: ActivatedRoute, private _ServService: ServService, private _Router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this._ServService.getServiceContent().subscribe((data: any) => {
      this.packageListType = Object.values(data);
    });

    this._ServService.getWorkspace().subscribe((data: any) => {
      this.workspaces = Object.values(data);
    });
  }

  onPackageTypeChange(): void {
    const selectedPackage = this.packageListType.find((p: PackageType) => p.package_type === this.PayForm.get('packagetype')?.value);
    if (selectedPackage) {
      if (selectedPackage) {
      } if (selectedPackage.id === 5) {
        this.PayForm.get('numOfPeople')?.setValue('4');

      } else {
        this.PayForm.get('numOfPeople')?.setValue('');
      }
    }
  }

  submitForm(): void {
    if (this.PayForm.invalid) {
      return;
    }

    const formData = this.PayForm.value;

    this._ServService.retriveData(formData).subscribe((data) => {
      console.log(data);

      if (data.message === 'Payment processed successfully') {
        const illiterates = data[1];
        let illiterateDetails = '';
        let workspaceDetails = '';
        let price = data[0]; // Extract the price from the data object

        illiterates.forEach((illiterate: any) => {
          illiterateDetails += `Name: ${illiterate.name}\nAddress: ${illiterate.address}\n\n`;
        });

        // If the selected package is Premium, add workspace details
        if (formData.packagetype === 'Premium') {
          if (data.workspace) {
            if (data.workspace.name) {
              workspaceDetails += `Workspace name: ${data.workspace.name}\n`;
            }
            if (data.workspace.phone) {
              workspaceDetails += `Workspace phone: ${data.workspace.phone}\n`;
            }
            if (data.workspace.address) {
              workspaceDetails += `Workspace address: ${data.workspace.address}\n`;
            }
          }
        }

        // Concatenate the price with the illiterate details and workspace details
        const paymentDetails = `Price: ${price}\n\nIlliterate Details:\n${illiterateDetails}${workspaceDetails}`;

        // Set the payment details in a variable
        this.illiterateDetails = paymentDetails;
      } else {
        alert(data.message);
      }
    });
  }

}
