import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFormTwComponent } from './pay-form-tw.component';

describe('PayFormTwComponent', () => {
  let component: PayFormTwComponent;
  let fixture: ComponentFixture<PayFormTwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayFormTwComponent]
    });
    fixture = TestBed.createComponent(PayFormTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
