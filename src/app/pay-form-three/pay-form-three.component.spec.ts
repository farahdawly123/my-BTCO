import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFormThreeComponent } from './pay-form-three.component';

describe('PayFormThreeComponent', () => {
  let component: PayFormThreeComponent;
  let fixture: ComponentFixture<PayFormThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayFormThreeComponent]
    });
    fixture = TestBed.createComponent(PayFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
