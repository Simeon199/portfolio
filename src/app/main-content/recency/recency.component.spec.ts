import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecencyComponent } from './recency.component';

describe('RecencyComponent', () => {
  let component: RecencyComponent;
  let fixture: ComponentFixture<RecencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
