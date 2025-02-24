import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTechnologyComponent } from './single-technology.component';

describe('SingleTechnologyComponent', () => {
  let component: SingleTechnologyComponent;
  let fixture: ComponentFixture<SingleTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTechnologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
