import { Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';


export const routes: Routes = [
    { path: 'szczegoly/:id', component: EventDetailsComponent },
    { path: 'dodaj-wydarzenie', component: AddEventComponent },
  ];
