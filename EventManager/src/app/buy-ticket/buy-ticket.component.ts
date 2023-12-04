import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive, ActivatedRoute} from '@angular/router';
import { EventDataService } from '../services/event-data.service';
import { Event } from '../models/Event';
import { ValidDateDirective } from '../directives/valid-date.directive';

@Component({
  selector: 'app-buy-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, RouterLinkActive, ReactiveFormsModule, ValidDateDirective],
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.css'
})
export class BuyTicketComponent implements OnInit {
  buyTicketForm: FormGroup;
  event: Event | undefined;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataService: EventDataService ) {
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
    this.event = this.eventDataService.getEvent(this.id);
  }

  buyTicket(): void {

  }

  back() { this.router.navigate(['']); }
}

