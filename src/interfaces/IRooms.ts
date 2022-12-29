export interface IRoom {
  id?:  string | number;
  images: string [];
  bed_type: string;
  room_number: number;
  description: string;
  price: string;
  offer: boolean;
  offer_price: number;
  cancellation: string;
  facilities: string[];
  status: boolean;
}
