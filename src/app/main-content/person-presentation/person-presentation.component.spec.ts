import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPresentationComponent } from './person-presentation.component';

describe('PersonPresentationComponent', () => {
  let component: PersonPresentationComponent;
  let fixture: ComponentFixture<PersonPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
