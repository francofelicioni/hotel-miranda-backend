export interface IBookings {
  id?: string;
  full_name: string;
  order_date: Date;
  check_in: Date;
  check_out: Date;
  room_type: string;
  price: string;
  image: string;
  special_request: string;
  description: string;
  state: string;
}
