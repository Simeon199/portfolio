import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecencyComponent } from './single-recency.component';

describe('SingleRecencyComponent', () => {
  let component: SingleRecencyComponent;
  let fixture: ComponentFixture<SingleRecencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleRecencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
