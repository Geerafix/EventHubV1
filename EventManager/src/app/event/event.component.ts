import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../models/Event';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchEventPipe } from "../pipes/searchevent.pipe";
import { AddEventComponent } from '../add-event/add-event.component';
import { EventDataService } from '../service/event-data.service';

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [CommonModule, FormsModule, SearchEventPipe, RouterLink, RouterOutlet, RouterLinkActive, AddEventComponent]
})
export class EventComponent implements OnInit {
  eventList: Event[] = [];
  search: string = "";
  searchBy: string = 'nazwa';

  constructor(private router: Router, private eventDataService: EventDataService) {
    this.eventList.push(new Event(1, "Przedstawienie teatralne", "Rodzaj1", "Organizator1", "Białystok", 100, 200, new Date('2023-02-15T18:30:00'), new Date('2023-02-15T22:00:00'), 50));
    this.eventList.push(new Event(2, "Koncert muzyczny", "Rodzaj2", "Organizator2", "InnyMiasto", 120, 250, new Date('2023-03-10T20:00:00'), new Date('2023-03-10T23:30:00'), 80));
    this.eventList.push(new Event(3, "Wystawa sztuki", "Rodzaj3", "Organizator3", "JeszczeInneMiasto", 80, 180, new Date('2023-04-05T10:00:00'), new Date('2023-04-05T18:00:00'), 30));
    this.eventList.push(new Event(4, "Konferencja naukowa", "Rodzaj4", "Organizator4", "MiastoKonferencji", 200, 350, new Date('2023-05-20T09:00:00'), new Date('2023-05-20T17:00:00'), 150));
    this.eventList.push(new Event(5, "Pokaz filmowy", "Rodzaj5", "Organizator5", "FilmoweMiasto", 90, 150, new Date('2023-06-15T19:00:00'), new Date('2023-06-15T22:30:00'), 60));
    this.eventList.push(new Event(6, "Warsztaty kulinarne", "Rodzaj6", "Organizator6", "GastronomiczneMiasto", 60, 100, new Date('2023-07-08T14:00:00'), new Date('2023-07-08T17:00:00'), 25));
    this.eventList.push(new Event(7, "Sesja fotograficzna", "Rodzaj7", "Organizator7", "FotogeniczneMiasto", 110, 220, new Date('2023-08-03T16:30:00'), new Date('2023-08-03T20:00:00'), 45));
    this.eventList.push(new Event(8, "Występ stand-upowy", "Rodzaj8", "Organizator8", "SmieszneMiasto", 70, 120, new Date('2023-09-18T21:00:00'), new Date('2023-09-18T23:30:00'), 40));
    this.eventList.push(new Event(9, "Pokaz mody", "Rodzaj9", "Organizator9", "ModneMiasto", 85, 160, new Date('2023-10-12T17:00:00'), new Date('2023-10-12T21:00:00'), 55));
    this.eventList.push(new Event(10, "Festiwal kulinarny", "Rodzaj10", "Organizator10", "KulinarnyOśrodek", 150, 300, new Date('2023-11-25T12:00:00'), new Date('2023-11-25T20:00:00'), 100));
    this.eventDataService.send(this.eventList);
  }

  ngOnInit(): void {

  }

  isAddEvent(): boolean { return this.router.url.startsWith('/dodaj-wydarzenie'); }
  isEventDetails(): boolean { return this.router.url.startsWith('/szczegoly'); }

  addEvent() { this.router.navigate(['/dodaj-wydarzenie']); }
  showEventDetails(event: Event): void { this.router.navigate(['/szczegoly', event._id]); }
}
