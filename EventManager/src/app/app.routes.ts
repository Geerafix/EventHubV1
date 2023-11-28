import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

export const routes: Routes = [
    { path: 'szczegoly/:id', component: EventdetailsComponent },
    { path: 'dodaj-wydarzenie', component: EventComponent },
  ];
