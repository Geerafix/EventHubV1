import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eventdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.css'
})
export class EventdetailsComponent implements OnInit {
  eventId!: number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.eventId = +params.get('id');
  }
}
