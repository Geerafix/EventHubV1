import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
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
  eventPlan: Plan[] = [];
  plan: Plan | undefined;

  constructor() {
    this.planForm = new FormGroup({
      nazwa: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      godz_rozpoczecia: new FormControl('', [Validators.required]),
      godz_zakonczenia: new FormControl('', [Validators.required]),
    });
  }

  add(event: Event) {
    this.eventPlan.push(new Plan(this.planForm.value.nazwa, this.planForm.value.godz_rozpoczecia, this.planForm.value.godz_zakonczenia));
    event?.preventDefault();
  }

  remove(index: number) {
    this.eventPlan.splice(index, 1);
  }
}
