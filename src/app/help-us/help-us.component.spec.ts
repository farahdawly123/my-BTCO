import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpUsComponent } from './help-us.component';

describe('HelpUsComponent', () => {
  let component: HelpUsComponent;
  let fixture: ComponentFixture<HelpUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpUsComponent]
    });
    fixture = TestBed.createComponent(HelpUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
