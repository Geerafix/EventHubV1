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
  planForm: FormGroup;
  eventTitle: string | undefined;
  @Input() eventForm: FormGroup | undefined;
  @Input() eventPlan: Plan[] = [];
  @Input() start_date: Date | undefined;
  @Input() end_date: Date | undefined;
  plan: Plan | undefined;

  constructor() {
    this.planForm = new FormGroup({
      nazwa: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      godz_rozpoczecia: new FormControl('', [Validators.required, this.validStartHour]),
      godz_zakonczenia: new FormControl('', [Validators.required, this.validEndHour]),
    });
  }

  addPlan() {
    this.eventPlan.push(new Plan(this.planForm.value.nazwa,
                                 this.planForm.value.godz_rozpoczecia,
                                 this.planForm.value.godz_zakonczenia));
  }

  removePlan(index: number) {
    this.eventPlan.splice(index, 1);
  }

  validStartHour(control: AbstractControl): { [key: string]: any } | null {
    // const godz_rozpoczecia = control.get('godz_rozpoczecia');

    // if (godz_rozpoczecia && control.value < godz_rozpoczecia.value) {
    //   return { 'validStartHour': true };
    // }
    return null;
  }

  validEndHour(control: AbstractControl): { [key: string]: any } | null {
    // const godz_zakonczenia = control.get('godz_zakonczenia');

    // if (new Date(control.value) < new Date(this.planForm.value.godz_rozpoczecia)) {
    //   return { 'validStartHour': true };
    // }
    return null;
  }
}
