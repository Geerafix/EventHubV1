import { Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';


export const routes: Routes = [
    { path: 'dodaj-wydarzenie', component: AddEventComponent },
    { path: '', component: EventComponent },
  ];
