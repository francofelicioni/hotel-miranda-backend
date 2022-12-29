export interface IContact {
  id?: string;
  customer: string;
  email: string;
  phone: string;
  date: Date;
  subject: string;
  comment: string;
  archived: boolean;
}
