import { faker } from "@faker-js/faker";
import { IBooking } from "src/interfaces/IBookings";
import { IContact } from "src/interfaces/IContact";
import { IRoom } from "src/interfaces/IRooms";
import { IUser } from "src/interfaces/IUsers";
import { dbQuery } from "./connection";
import bcrypt from "bcrypt";

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
    price: faker.commerce.price(300, 1000, 2),
    image: faker.image.people(300, 300, false),
    special_request: faker.lorem.words(15),
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
    price: faker.commerce.price(300, 1000, 2),
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

const passwd = (pass: string): string => {
  return bcrypt.hashSync(pass, 10);
};

export const createRandomUser =  (): IUser => {
  return {
    image: faker.image.avatar(),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
    description: faker.lorem.words(10),
    start_date: faker.date.past(1),
    status: faker.datatype.boolean(),
    password: passwd(faker.internet.password()),
  };
};

export const createRandomContact = (): IContact => {
  return {
    customer: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    date: faker.date.past(1),
    subject: faker.lorem.words(10),
    comment: faker.lorem.words(10),
    archived: faker.datatype.boolean(),
  };
};

const bookingsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomBooking = createRandomBooking();
    dbQuery("INSERT INTO bookings SET ?", randomBooking);
  }
};

const roomsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomRoom = createRandomRoom();
    dbQuery("INSERT INTO rooms SET ?", randomRoom);
  }
};

const contactsCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomContact = createRandomContact();
    dbQuery("INSERT INTO messages SET ?", randomContact);
  }
};

const usersCreator = (): void => {
  for (let i = 0; i < 20; i++) {
    const randomUser = createRandomUser();
    dbQuery(`INSERT INTO users SET ?`, randomUser);
  }
};

const run = () => {
  bookingsCreator();
  roomsCreator();
  contactsCreator();
  usersCreator();
};

run();

// connection.end();
