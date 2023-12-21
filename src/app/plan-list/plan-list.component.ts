import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../models/Plan';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule,
            FormsModule
  ],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})

export class PlanListComponent {
  @Input() eventPlan: Plan[] | undefined;
}
