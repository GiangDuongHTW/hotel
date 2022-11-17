import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  bookingsForm: FormGroup | undefined;
  
  constructor(
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bookingsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      roomNumber: new FormControl('', Validators.required), 
      request: new FormControl(''),
      checkIn: new FormControl('', Validators.required),
      checkOut: new FormControl('', Validators.required),
    });
  }

  submit() {

    if(this.bookingsForm?.valid){
      this.bookingsForm?.markAsDirty();
      this.bookingsForm?.markAllAsTouched();
      this.commonService.setBookings(this.bookingsForm?.getRawValue());
      this.router.navigate(['bookings']);
    };
   
  }

  

}
