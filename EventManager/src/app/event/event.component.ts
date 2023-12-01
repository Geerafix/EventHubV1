import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../models/Event';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchEventPipe } from "../pipes/searchevent.pipe";

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [CommonModule, FormsModule, SearchEventPipe]
})
export class EventComponent implements OnInit {
  eventList: Event[] = [];
  event1: Event = new Event(1, "asd", "test2", "test3", "Białystok", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event2: Event = new Event(2, "da", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event3: Event = new Event(3, "tf", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event4: Event = new Event(4, "gf", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event5: Event = new Event(5, "df", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event6: Event = new Event(6, "df", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event7: Event = new Event(7, "aSF", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event8: Event = new Event(8, "SDF", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event9: Event = new Event(9, "asfd", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  event10: Event = new Event(10,"sdf", "test200", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
  search: string = "";

  searchBy: string = 'nazwa';

  redirect(id : number){
    this.router.navigate(['szczegoly', id]);
  }

  addEvent() {
    this.router.navigate(['dodaj-wydarzenie']);
  }
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.eventList.push(this.event1);
    this.eventList.push(this.event2);
    this.eventList.push(this.event3);
    this.eventList.push(this.event4);
    this.eventList.push(this.event5);
    this.eventList.push(this.event6);
    this.eventList.push(this.event7);
    this.eventList.push(this.event8);
    this.eventList.push(this.event9);
    this.eventList.push(this.event10);
  }
}
