import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanListFormComponent } from './plan-list-form.component';

describe('PlanListFormComponent', () => {
  let component: PlanListFormComponent;
  let fixture: ComponentFixture<PlanListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanListFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
