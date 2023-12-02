import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventDataService } from '../service/event-data.service';
import { Event } from '../models/Event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventList: Event[] = [];
  id!: number;
  nazwa!: string;
  rodzaj!: string;
  organizator!: string;
  miejsce!: string;
  max_ilosc_osob!: number;
  data_rozpoczecia!: Date;
  data_zakonczenia!: Date;
  cena_biletu!: number;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataSerice: EventDataService) {
    this.eventDataSerice.data$.subscribe((data) => {
        this.eventList = data;
      }
    );
  }

  back(): void {
    this.router.navigate(['/']);
  }

  addEventToEventList(){
    this.eventList.push(new Event(this.eventList.length,
                                  this.nazwa,
                                  this.rodzaj,
                                  this.organizator,
                                  this.miejsce,
                                  0,
                                  this.max_ilosc_osob,
                                  this.data_rozpoczecia,
                                  this.data_zakonczenia,
                                  this.cena_biletu));
    this.router.navigate(['/']);
  }
}
