import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive, ActivatedRoute} from '@angular/router';
import { EventDataService } from '../service/event-data.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-buy-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.css'
})
export class BuyTicketComponent implements OnInit {
  buyTicketForm: FormGroup;
  eventList: Event[] = [];
  event: Event | undefined;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataSerice: EventDataService ) {
    this.eventDataSerice.data$.subscribe((data) => { this.eventList = data; });
    this.buyTicketForm = new FormGroup({
      imie: new FormControl(),
      nazwisko: new FormControl(),
      data_urodzenia: new FormControl(),
      email: new FormControl(),
      nr_telefonu: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => { this.id = +params['id']; });
    this.event = this.eventList.find((event) => event._id === this.id);
  }

  buyTicket(): void {

  }

  back() {
    this.router.navigate(['']);
  }
}

