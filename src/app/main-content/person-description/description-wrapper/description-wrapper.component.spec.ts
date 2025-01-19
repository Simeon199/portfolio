import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWrapperComponent } from './description-wrapper.component';

describe('DescriptionWrapperComponent', () => {
  let component: DescriptionWrapperComponent;
  let fixture: ComponentFixture<DescriptionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
