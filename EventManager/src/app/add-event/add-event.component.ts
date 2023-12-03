import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventDataService } from '../services/event-data.service';
import { Event } from '../models/Event';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventList: Event[] = [];
  event!: Event;
  eventForm!: FormGroup;

  constructor(private router: Router, private eventDataSerice: EventDataService) {
    this.eventDataSerice.data$.subscribe((data) => { this.eventList = data; });
    this.eventForm = new FormGroup({
      nazwa: new FormControl(),
      rodzaj: new FormControl(),
      organizator: new FormControl(),
      miejsce: new FormControl(),
      max_ilosc_osob: new FormControl(),
      data_rozpoczecia: new FormControl(),
      data_zakonczenia: new FormControl(),
      cena_biletu: new FormControl(),
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
                                          new Date(this.eventForm.value.data_rozpoczecia),
                                          new Date(this.eventForm.value.data_zakonczenia),
                                          this.eventForm.value.cena_biletu));
    this.router.navigate(['/']);
  }
}
