export interface IContact {
    id?: string;
    customer: string;
    phone: string;
    date: Date;
    email: string;
    subject: string,
    comment: string
    archived: boolean;
}