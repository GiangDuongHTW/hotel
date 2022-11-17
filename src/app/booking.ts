export interface Booking {

  id: string;
  name: string;
  roomNumber: number;
  dateOrder: Date;
  checkIn: Date;
  checkOut: Date;
  request: string;
}

export const initialBooking : Booking[] =[]

