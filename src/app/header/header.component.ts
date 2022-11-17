import { Component, OnInit } from '@angular/core';
import { Observable, skip } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalPerson: number | undefined;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.common.booking$.subscribe((bookings) => {
        this.totalPerson = bookings.length;
    });
  }
}
