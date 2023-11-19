import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../classes/Event';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  test: Event = new Event("test1", "test2", "test3", "test4", 5, 6, new Date(), new Date, 7);
}
