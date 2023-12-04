import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive]
})
export class EventDetailsComponent implements OnInit {
  public eventList: Event[] = [];
  private id!: number;
  event: Event | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataSerice: EventDataService) {
    this.eventList = eventDataSerice.getEvents();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => { this.id = +params['id']; });
    this.event = this.eventList.find((event) => event._id === this.id);
  }

  isEventDetails(): boolean { return this.router.url.startsWith('/szczegoly'); }
  isBuyTicket(): boolean { return this.router.url.startsWith('/kup-bilet'); }

  back(): void { this.router.navigate(['']); }

  buyTicket(event: Event): void { this.router.navigate(['/kup-bilet', event._id]) }
}
