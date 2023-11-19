import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../classes/Event';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  event1: Event = new Event("test1", "test2", "test3", "test4", 0, 6, new Date('01/01/2002'), new Date('05/01/2002'), 7);
}
