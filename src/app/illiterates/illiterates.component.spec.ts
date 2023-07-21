import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlliteratesComponent } from './illiterates.component';

describe('IlliteratesComponent', () => {
  let component: IlliteratesComponent;
  let fixture: ComponentFixture<IlliteratesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlliteratesComponent]
    });
    fixture = TestBed.createComponent(IlliteratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
