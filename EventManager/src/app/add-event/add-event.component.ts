import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventDataService } from '../services/event-data.service';
import { Event } from '../models/Event';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddPlanComponent } from '../add-plan/add-plan.component';
import { Plan } from '../models/Plan';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FormsModule, ReactiveFormsModule, AddPlanComponent],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})

export class AddEventComponent {
  eventList: Event[] = [];
  eventPlan: Plan[] = [];
  event!: Event;
  eventForm!: FormGroup;

  constructor(private router: Router, private eventDataService: EventDataService) {
    this.eventList = eventDataService.getEvents();
    this.eventForm = new FormGroup({
      nazwa: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      rodzaj: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      organizator: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      miejsce: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      max_ilosc_osob: new FormControl('', [Validators.required, Validators.max(1000)]),
      data_wydarzenia: new FormControl('', [Validators.required]),
      cena_biletu: new FormControl('', [Validators.required, Validators.max(1000)]),
    });
  }

  back(): void { this.router.navigate(['/']); }

  addEventToEventList(): void {
    this.eventList.push(new Event(this.eventList.length + 1,
                                          this.eventForm.value.nazwa,
                                          this.eventForm.value.rodzaj,
                                          this.eventForm.value.organizator,
                                          this.eventForm.value.miejsce,
                                          0,
                                          this.eventForm.value.max_ilosc_osob,
                                          new Date(this.eventForm.value.data_wydarzenia),
                                          this.eventPlan,
                                          this.eventForm.value.cena_biletu));
    this.router.navigate(['/']);
  }
}
