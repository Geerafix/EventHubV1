import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Plan } from '../models/Plan';
import { PlanListFormComponent } from '../plan-list-form/plan-list-form.component';

@Component({
  selector: 'app-add-plan',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PlanListFormComponent],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {
  @Input() eventPlan: Plan[] = [];
  public planForm: FormGroup;

  constructor() {
    this.planForm = new FormGroup({
      nazwa: new FormControl('', [Validators.required,
                                  Validators.minLength(5),
                                  Validators.maxLength(30)]),

      godz_rozpoczecia: new FormControl('', [Validators.required]),

      godz_zakonczenia: new FormControl('', [Validators.required,
                                            this.validEndHour]),
    });
  }

  addPlan() {
    this.eventPlan.push(new Plan(this.planForm.value.nazwa,
                                 this.planForm.value.godz_rozpoczecia,
                                 this.planForm.value.godz_zakonczenia));
  }

  validEndHour(control: AbstractControl): ValidationErrors | null {
    let startTime = control.root.get('godz_rozpoczecia')?.value;
    let endTime = control.value;

    if ((endTime && startTime) && (endTime >= startTime)) {
        return { validEndHour: true };
    }

    return null;
  }
}
