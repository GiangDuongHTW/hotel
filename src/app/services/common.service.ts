import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Booking, initialBooking } from '../booking';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  _bookings$ = new BehaviorSubject<Booking[]>(initialBooking);

  get booking$(): Observable<Booking[]>{
    return this._bookings$.asObservable();
  }

  constructor() {
  }

 setBookings(booking: Booking){
  this._bookings$.next([
    ...this._bookings$.value,
    booking
  ]);
 };
}
