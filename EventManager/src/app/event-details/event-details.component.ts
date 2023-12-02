import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { EventDataService } from '../service/event-data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive]
})
export class EventDetailsComponent implements OnInit {
  public eventList: Event[] = [];
  event: Event | undefined;
  private eventId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataSerice: EventDataService) {
    this.eventDataSerice.data$.subscribe((data) => { this.eventList = data; });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => { this.eventId = +params['id']; });
    this.event = this.eventList.find((e) => e._id === this.eventId);
  };

  back(): void {
    this.router.navigate(['/']);
  }
}
