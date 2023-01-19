import { connection, disconnect } from "./connection";
import { faker } from "@faker-js/faker";
import bcryptPass from "./utils/bcryptPass";

import { IBooking } from "./interfaces/bookings";
import { IRoom } from "./interfaces/rooms";
import { IContact } from "./interfaces/contact";
import { IUser } from "./interfaces/users";
import { bookingModel } from "./schemas/bookingSchema";
import { roomModel } from "./schemas/roomSchema";
import { userModel } from "./schemas/userSchema";
import { contactModel } from "./schemas/contactSchema";

const run = async (): Promise<void> => {
  await connection();
  await roomsCreator();
  await usersCreator();
  await bookingsCreator();
  await contactsCreator();
  await disconnect();
};

run();

//Data for bookings
const roomSaved: Array<IRoom> = [];
const userSaved: Array<IUser> = [];

async function roomsCreator(): Promise<void> {
  for (let i = 0; i < 20; i++) {
    const randomRoom: IRoom = await createRandomRoom();
    roomSaved.push(randomRoom);
    await roomModel.create(randomRoom);
  }
}

async function usersCreator(): Promise<void> {
  for (let i = 0; i < 20; i++) {
    const randomUser: IUser = await createRandomUser();
    userSaved.push(randomUser);
    await userModel.create(randomUser);
  }
}

async function bookingsCreator(): Promise<void> {
  for (let i = 0; i < 20; i++) {
    const user: IUser = userSaved[Math.round(Math.random() * users.length - 1)];
    const room: IRoom = roomSaved[Math.round(Math.random() * rooms.length - 1)];
    const randomBooking: IBooking = await createRandomBooking(
      await addRoomToBooking(room),
      await addUserBooking(user)
    );
    await bookingModel.create(randomBooking);
  }
}

async function contactsCreator(): Promise<void> {
  for (let i = 0; i < 20; i++) {
    const randomContact: IContact = await createRandomContact();
    await contactModel.create(randomContact);
  }
}

// Creator functions with fakerJS
async function createRandomRoom(): Promise<IRoom> {
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
}

async function createRandomUser(): Promise<IUser> {
  return {
    image: faker.image.avatar(),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    contact: faker.phone.number(),
    description: faker.lorem.words(10),
    start_date: faker.date.past(),
    status: faker.datatype.boolean(),
    password: bcryptPass(faker.internet.password()),
  };
}

async function createRandomBooking(
  room: IRoom,
  user: IUser
): Promise<IBooking> {
  return {
    user_id: user._id,
    room_id: room._id,
    full_name: faker.name.fullName(),
    order_date: new Date(faker.date.past(1)).toUTCString().slice(0, 16),
    check_in: faker.date.between("01-01-2022", "31-01-2022"),
    check_out: faker.date.between("01-02-2022", "28, 02,2022"),
    room_type: faker.helpers.arrayElement([
      "Single",
      "Double",
      "Double Superior",
      "Suite",
    ]),
    price: faker.datatype.number({ min: 150, max: 1000, precision: 0.01 }),
    image: faker.image.people(300, 300, false),
    special_request: faker.lorem.words(30),
    description: faker.lorem.words(15),
    state: faker.helpers.arrayElement(["Check In", "Check Out", "In Progress"]),
  };
}

async function createRandomContact(): Promise<IContact> {
  return {
    customer: faker.name.fullName(),
    phone: faker.phone.number(),
    date: faker.date.past(1),
    email: faker.internet.email(),
    subject: faker.lorem.words(10),
    comment: faker.lorem.words(30),
    archived: faker.datatype.boolean(),
  };
}

//Random data for bookings
async function addRoomToBooking(room: IRoom): Promise<IRoom> {
  const dbRoom = roomModel.findOne({ _id: room._id });
  return await dbRoom.exec().then((result) => result);
};

async function addUserBooking(user: IUser): Promise<IUser> {
  const dbUser = userModel.findOne({ _id: user._id });
  return await dbUser.exec().then((result) => result);
};
