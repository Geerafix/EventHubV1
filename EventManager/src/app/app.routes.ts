import { Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';


export const routes: Routes = [
    { path: 'dodaj-wydarzenie', component: AddEventComponent },
    { path: 'szczegoly/:id', component: EventDetailsComponent },
    { path: 'kup-bilet/:id', component: BuyTicketComponent},
    { path: '', component: EventComponent },
  ];
