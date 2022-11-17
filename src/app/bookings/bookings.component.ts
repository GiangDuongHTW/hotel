import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, skip } from 'rxjs';
import { Booking } from '../booking';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
viewArticle(_t62: any) {
throw new Error('Method not implemented.');
}
  welcome = false;

  dataSource = new MatTableDataSource<Booking>();
  displayedColumns: string[] = ['Employee', 'CheckIn', 'CheckOut', 'Request', 'actions'];
 
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {

    this.commonService.booking$.subscribe((bookings) => {
      if(bookings.length === 0){
        this.welcome = true;
      }
       this.dataSource.data = bookings;
    });
   
  }
}
