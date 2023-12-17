import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventDataService } from '../services/event-data.service';
import { Event } from '../models/Event';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AddPlanComponent } from '../add-plan/add-plan.component';
import { Plan } from '../models/Plan';
import { Participant } from '../models/Participant';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    AddPlanComponent
],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  public event!: Event;
  public eventPlan: Plan[] = [];
  public eventParticipants: Participant[] = [];
  public eventForm: FormGroup;
  public dbSize!: number;
  public id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventDataService: EventDataService,) {

    this.eventForm = new FormGroup({
      nazwa: new FormControl('', [Validators.required,
                                  Validators.minLength(5),
                                  Validators.maxLength(30)]),

      rodzaj: new FormControl('', [Validators.required,
                                   Validators.minLength(5),
                                   Validators.maxLength(30)]),

      organizator: new FormControl('', [Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(30)]),

      miejsce: new FormControl('', [Validators.required,
                                    Validators.minLength(5),
                                    Validators.maxLength(30)]),

      max_ilosc_osob: new FormControl('', [Validators.required,
                                           Validators.max(10000)]),

      data_wydarzenia: new FormControl('', [Validators.required,
                                            this.validEventDate]),

      cena_biletu: new FormControl('', [Validators.required,
                                        Validators.max(1000)])
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => { this.id = +params['id']; });
    this.eventDataService.getData().subscribe((events: Event[]) => {
      this.dbSize = events.length;
    });
    this.eventDataService.getSingleData(this.id).subscribe((event: Event) => {
      this.event = event;
      this.eventPlan = event._plan;
      this.eventParticipants = event._uczestnicy;
      this.eventForm.patchValue({
        nazwa: event._nazwa,
        rodzaj: event._rodzaj,
        organizator: event._organizator,
        miejsce: event._miejsce,
        max_ilosc_osob: event._max_ilosc_osob,
        data_wydarzenia: event._data_wydarzenia.toISOString().split('T')[0],
        cena_biletu: event._cena_biletu
      });
    });
  }

  back(): void { this.router.navigate(['/szczegoly', this.id]); }

  addEventToEventList(): void {
    let modifiedEvent = new Event(this.event._id,
                            this.eventForm.value.nazwa,
                            this.eventForm.value.rodzaj,
                            this.eventForm.value.organizator,
                            this.eventForm.value.miejsce,
                            this.eventForm.value.max_ilosc_osob,
                            new Date(this.eventForm.value.data_wydarzenia),
                            this.eventForm.value.cena_biletu,
                            this.eventPlan,
                            this.eventParticipants);

    this.eventDataService.updateData(this.event._id, modifiedEvent).subscribe();
    this.router.navigate(['']);
  }

  validEventDate(control: AbstractControl): ValidationErrors | null {
    return (new Date(control.value) < new Date()) ? { 'validEventDate': true } : null;
  }
}
