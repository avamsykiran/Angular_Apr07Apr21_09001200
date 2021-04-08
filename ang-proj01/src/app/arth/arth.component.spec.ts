import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthComponent } from './arth.component';

describe('ArthComponent', () => {
  let component: ArthComponent;
  let fixture: ComponentFixture<ArthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
