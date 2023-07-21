import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayformComponent } from './payform.component';

describe('PayformComponent', () => {
  let component: PayformComponent;
  let fixture: ComponentFixture<PayformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayformComponent]
    });
    fixture = TestBed.createComponent(PayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
