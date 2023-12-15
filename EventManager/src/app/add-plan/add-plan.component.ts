import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Plan } from '../models/Plan';

@Component({
  selector: 'app-add-plan',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {
  @Input() eventPlan: Plan[] = [];
  public planForm: FormGroup;
  u!: any;

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

  removePlan(index: number) { this.eventPlan.splice(index, 1); }

  validEndHour(control: AbstractControl): { [key: string]: any } | null {

    return null;
  }
}
