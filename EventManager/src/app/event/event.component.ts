import { Component, OnInit, inject} from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Event } from '../models/Event';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchPipe } from "../pipes/search.pipe";
import { AddEventComponent } from '../add-event/add-event.component';
import { EventDataService } from '../services/event-data.service';
import { SearchByDatePipe } from '../pipes/search-by-date.pipe';
import { ScaleDirective } from '../directives/scale.directive';
import { HighlightDirective } from '../directives/highlight.directive';
import { Plan } from '../models/Plan';
import { Participant } from '../models/Participant';

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [CommonModule,
              FormsModule,
              SearchPipe,
              SearchByDatePipe,
              RouterLink,
              RouterOutlet,
              RouterLinkActive,
              AddEventComponent,
              ScaleDirective,
              HighlightDirective]
})
export class EventComponent implements OnInit {
  public eventList: Event[] = [];
  public search: string = '';
  public searchBy: string = 'nazwa';
  public startDate: string = '';
  public endDate: string = '';
  public event!: Event;

  constructor(
    private router: Router,
    private eventDataService: EventDataService) {
  }

  ngOnInit(): void {
    this.eventList.sort((a, b) => b._data_wydarzenia.getTime() - a._data_wydarzenia.getTime());
    this.eventDataService.getData().subscribe((events: Event[]) => {
      this.eventList = events;
    });
  }

  isAddEvent(): boolean { return this.router.url.startsWith('/dodaj-wydarzenie'); }
  isEventDetails(): boolean { return this.router.url.startsWith('/szczegoly'); }
  isBuyTicket(): boolean { return this.router.url.startsWith('/kup-bilet'); }

  addEvent() { this.router.navigate(['/dodaj-wydarzenie']); }
  showEventDetails(event: Event): void { this.router.navigate(['/szczegoly', event._id]); }
  buyTicket(event: Event): void { this.router.navigate(['/kup-bilet', event._id]); }

  clearPipe() {
    this.search = '';
    this.searchBy = 'nazwa'
    this.startDate = '';
    this.endDate = '';
  }
}
