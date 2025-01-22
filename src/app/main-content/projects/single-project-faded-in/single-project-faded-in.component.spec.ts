import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectFadedInComponent } from './single-project-faded-in.component';

describe('SingleProjectFadedInComponent', () => {
  let component: SingleProjectFadedInComponent;
  let fixture: ComponentFixture<SingleProjectFadedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectFadedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProjectFadedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
