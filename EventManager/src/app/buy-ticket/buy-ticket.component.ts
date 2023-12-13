import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive, ActivatedRoute} from '@angular/router';
import { EventDataService } from '../services/event-data.service';
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
  event: Event | undefined;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private eventDataService: EventDataService ) {
    this.buyTicketForm = new FormGroup({
      imie: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      nazwisko: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      data_urodzenia: new FormControl('', [Validators.required, this.validBirthDate]),
      email: new FormControl('', [Validators.required, this.validEmail]),
      nr_telefonu: new FormControl('', [Validators.required, Validators.min(100000000), Validators.max(999999999)]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => { this.id = +params['id']; });
    this.event = this.eventDataService.getEvent(this.id);
  }

  buyTicket(): void {

  }

  back() { this.router.navigate(['']); }

  validBirthDate(control: AbstractControl) : {[key: string]: any} | null {
    let birthDate = new Date(control.value);
    let diff = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    if (birthDate >= diff) {
      return { 'validBirthDate': true };
    }
    return null;
  }

  validEmail(control: AbstractControl) : {[key: string]: any} | null {

    return null;
  }
}

