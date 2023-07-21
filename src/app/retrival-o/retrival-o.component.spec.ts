import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivalOComponent } from './retrival-o.component';

describe('RetrivalOComponent', () => {
  let component: RetrivalOComponent;
  let fixture: ComponentFixture<RetrivalOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrivalOComponent]
    });
    fixture = TestBed.createComponent(RetrivalOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
