import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../models/Plan';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  @Input() eventPlan: Plan[] | undefined;
}
