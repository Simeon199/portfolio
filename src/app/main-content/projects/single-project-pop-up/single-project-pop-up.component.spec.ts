import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectPopUpComponent } from './single-project-pop-up.component';

describe('SingleProjectPopUpComponent', () => {
  let component: SingleProjectPopUpComponent;
  let fixture: ComponentFixture<SingleProjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
