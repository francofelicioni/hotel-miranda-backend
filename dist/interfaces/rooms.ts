export interface IRoom {
  id: string;
  full_name: string;
  order_date: string;
  check_in: string;
  check_out: string;
  room_number: number;
  bed_type: string;
  price: number;
  offer: number;
  offer_price: number;
  facilities: object[];
  description: string;
  status: boolean;
}
