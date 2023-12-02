import { Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';


export const routes: Routes = [
    { path: 'dodaj-wydarzenie', component: AddEventComponent },
    { path: 'szczegoly/:id', component: EventDetailsComponent },
    { path: '', component: EventComponent },
  ];
