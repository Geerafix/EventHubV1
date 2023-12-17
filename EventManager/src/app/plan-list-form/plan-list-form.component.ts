import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../models/Plan';

@Component({
  selector: 'app-plan-list-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-list-form.component.html',
  styleUrl: './plan-list-form.component.css'
})
export class PlanListFormComponent {
  @Input() eventPlan: Plan[] | undefined;

  removePlan(idx: number) { this.eventPlan?.splice(idx, 1); }
}
