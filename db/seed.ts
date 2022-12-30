import { faker } from "@faker-js/faker";
import { IBooking } from "src/interfaces/IBookings";
import { IContact } from "src/interfaces/IContact";
import { IRoom } from "src/interfaces/IRooms";
import { IUser } from "src/interfaces/IUsers";
import { dbQuery } from "../db/connection";

export function createRandomBooking(): IBooking {
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
    state: faker.helpers.arrayElements([
      "Check In",
      "Check Out",
      "In Progress",
    ]),
  };
}

export function createRandomRoom(): IRoom {
  return {
    images: faker.helpers.arrayElements([
      faker.image.imageUrl(500, 500, "hotel room", false),
      faker.image.imageUrl(500, 500, "hotel room", false),
      faker.image.imageUrl(500, 500, "hotel room", false),
    ]),
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
    facilities: faker.helpers.arrayElements([
      "AC",
      "Bath",
      "Sea View",
      "Late Checkout",
      "City Tour",
      "Led TV",
      "Wifi",
      "Breakfast",
    ]),
    status: faker.datatype.boolean(),
  };
}

export function createRandomUser(): IUser {
  return {
    image: faker.image.avatar(),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
    description: faker.lorem.words(10),
    start_date: faker.date.past(),
    status: faker.datatype.boolean(),
    password: faker.internet.password(),
  };
}

export function createRandomContact(): IContact {
  return {
    customer: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    date: faker.date.past(1),
    subject: faker.lorem.words(10),
    comment: faker.lorem.words(30),
    archived: faker.datatype.boolean(),
  };
}

const bookingsGenerator = async (): Promise<void> => {
  const newBookings = [];
  for (let booking = 0; booking < 20; booking++) {
    const randomBooking = createRandomBooking();
    const newBooking = await dbQuery(
      "INSERT INTO bookings (full_name, order_date, check_in, check_out, room_type, price, image, special_request, description, state) VALUES ?",
      randomBooking
    );
    newBookings.push(newBooking);
    console.log(newBookings);
  }
};

const roomsGenerator = async (): Promise<void> => {
  const newRooms = [];
  for (let room = 0; room < 20; room++) {
    const randomRoom = createRandomRoom();
    const newRoom = await dbQuery(
      "INSERT INTO rooms (images, bed_type, room_number, description, price, offer, offer_price, cancellation, facilities, status ) VALUES ?",
      randomRoom
    );
    newRooms.push(newRoom);
    console.log(newRooms);
  }
};

const usersGenerator = async (): Promise<void> => {
  const newUsers = [];
  for (let user = 0; user < 20; user++) {
    const randomUser = createRandomUser();
    const newUser = await dbQuery(
      "INSERT INTO users (image,  full_name, email, contact, description, start_date, status, password ) VALUES ?",
      randomUser
    );
    newUsers.push(newUser);
    console.log(newUsers);
  }
};

const contactGenerator = async (): Promise<void> => {
  const newContacts = [];
  for (let contact = 0; contact < 20; contact++) {
    const randomContact = createRandomContact();
    const newContact = await dbQuery(
      "INSERT INTO users (customer, email, phone, date, subject, comment, archived ) VALUES ?",
      randomContact
    );
    newContacts.push(newContact);
    console.log(newContacts);
  }
};

bookingsGenerator();
roomsGenerator();
usersGenerator();
contactGenerator();