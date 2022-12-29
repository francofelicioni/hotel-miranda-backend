export interface IUser {
  id?: string | number;
  image: string;
  full_name: string;
  email: string;
  contact: string;
  description: string;
  start_date: Date;
  status: boolean;
  password: string;
}
