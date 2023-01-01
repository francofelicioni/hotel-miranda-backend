import { faker } from "@faker-js/faker";
import { IBooking } from "src/interfaces/IBookings";
import { IContact } from "src/interfaces/IContact";
import { IRoom } from "src/interfaces/IRooms";
import { IUser } from "src/interfaces/IUsers";
import { dbQuery } from "./connection";
import bcrypt from "bcrypt";

const password = async (pass: string): Promise<string> => {
  return await bcrypt.hash(pass, 10).then((result) => result);
};

export const createRandomBooking = (): IBooking => {
  return {
    full_name: faker.name.fullName(),
    order_date: faker.date.past(1),
    check_in: faker.date.between("2022-01-01", "2020-31-01"),
    check_out: faker.date.between("2022-01-02", "2020, 28,02"),
    room_type: faker.helpers.arrayElement([
      "Single",
      "Double",
      "Double Superior",
      "Suite",
    ]),
    price: faker.commerce.price(300, 1000, 2, "€"),
    image: faker.image.people(300, 300, false),
    special_request: faker.lorem.words(30),
    description: faker.lorem.words(15),
    state: faker.helpers.arrayElement(["Check In", "Check Out", "In Progress"]),
  };
};

export const createRandomRoom = (): IRoom => {
  return {
    images: faker.image.imageUrl(500, 500, "hotel room", false),
    bed_type: faker.helpers.arrayElement([
      "Single",
      "Double",
      "Double Superior",
      "Suite",
    ]),
    room_number: faker.datatype.number({ min: 100, max: 990 }),
    description: faker.lorem.words(10),
    price: faker.commerce.price(300, 1000, 2, "€"),
    offer: faker.datatype.boolean(),
    offer_price: faker.datatype.number({ min: 5, max: 80 }),
    cancellation: faker.lorem.words(15),
    facilities: String(
      faker.helpers.arrayElements([
        "AC",
        "Bath",
        "Sea View",
        "Late Checkout",
        "City Tour",
        "Led TV",
        "Wifi",
        "Breakfast",
      ])
    ),
    status: faker.datatype.boolean(),
  };
};

export const createRandomUser = async (): Promise<IUser> => {
  return {
    image: faker.image.avatar(),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
    description: faker.lorem.words(10),
    start_date: faker.date.past(),
    status: faker.datatype.boolean(),
    password: await password(faker.internet.password()),
  };
};

export const createRandomContact = (): IContact => {
  return {
    customer: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    date: faker.date.past(1),
    subject: faker.lorem.words(10),
    comment: faker.lorem.words(30),
    archived: faker.datatype.boolean(),
  };
};

const roomsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomRoom = createRandomRoom();
    dbQuery("INSERT INTO rooms SET ?", randomRoom);
  }
};

const bookingsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomBooking = createRandomBooking();
    dbQuery("INSERT INTO bookings SET ?", randomBooking);
  }
};

const usersCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomUser = createRandomUser();
    dbQuery("INSERT INTO users SET ?", randomUser);
  }
};

const contactsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomContact = createRandomContact();
    dbQuery("INSERT INTO contacts SET ?", randomContact);
  }
};

const run = () => {
  roomsCreator();
  bookingsCreator();
  usersCreator();
  contactsCreator();
};

run();
