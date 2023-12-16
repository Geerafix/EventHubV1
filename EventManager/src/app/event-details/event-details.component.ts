import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { EventDataService } from '../services/event-data.service';
import { PlanComponent } from '../plan/plan.component';
import { Plan } from '../models/Plan';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive, PlanComponent]
})
export class EventDetailsComponent implements OnInit {
  public event!: Event;
  public id!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventDataService: EventDataService) {
    this.route.params.subscribe((params) => { this.id = +params['id']; });
    this.eventDataService.getSingleData(this.id).subscribe((event: Event) => {
      this.event = event;
    });
  }

  ngOnInit(): void {

  }

  isEventDetails(): boolean { return this.router.url.startsWith('/szczegoly'); }
  isBuyTicket(): boolean { return this.router.url.startsWith('/kup-bilet'); }

  back(): void { this.router.navigate(['']); }
  buyTicket(event: Event): void { this.router.navigate(['/kup-bilet', event._id]) }
  deleteEvent(id: number) {
    this.eventDataService.deleteData(this.id).subscribe();
    this.router.navigate(['']);
  }
}
