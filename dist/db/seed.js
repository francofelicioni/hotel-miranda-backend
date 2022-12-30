"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomContact = exports.createRandomUser = exports.createRandomRoom = exports.createRandomBooking = void 0;
const faker_1 = require("@faker-js/faker");
const connection_1 = require("../db/connection");
function createRandomBooking() {
    return {
        full_name: faker_1.faker.name.fullName(),
        order_date: faker_1.faker.date.past(1),
        check_in: faker_1.faker.date.between("2022-01-01", "2020-31-01"),
        check_out: faker_1.faker.date.between("2022-01-02", "2020, 28,02"),
        room_type: faker_1.faker.helpers.arrayElement([
            "Single",
            "Double",
            "Double Superior",
            "Suite",
        ]),
        price: faker_1.faker.commerce.price(300, 1000, 2, "€"),
        image: faker_1.faker.image.people(300, 300, false),
        special_request: faker_1.faker.lorem.words(30),
        description: faker_1.faker.lorem.words(15),
        state: faker_1.faker.helpers.arrayElements([
            "Check In",
            "Check Out",
            "In Progress",
        ]),
    };
}
exports.createRandomBooking = createRandomBooking;
function createRandomRoom() {
    return {
        images: faker_1.faker.helpers.arrayElements([
            faker_1.faker.image.imageUrl(500, 500, "hotel room", false),
            faker_1.faker.image.imageUrl(500, 500, "hotel room", false),
            faker_1.faker.image.imageUrl(500, 500, "hotel room", false),
        ]),
        bed_type: faker_1.faker.helpers.arrayElement([
            "Single",
            "Double",
            "Double Superior",
            "Suite",
        ]),
        room_number: faker_1.faker.datatype.number({ min: 100, max: 990 }),
        description: faker_1.faker.lorem.words(10),
        price: faker_1.faker.commerce.price(300, 1000, 2, "€"),
        offer: faker_1.faker.datatype.boolean(),
        offer_price: faker_1.faker.datatype.number({ min: 5, max: 80 }),
        cancellation: faker_1.faker.lorem.words(15),
        facilities: faker_1.faker.helpers.arrayElements([
            "AC",
            "Bath",
            "Sea View",
            "Late Checkout",
            "City Tour",
            "Led TV",
            "Wifi",
            "Breakfast",
        ]),
        status: faker_1.faker.datatype.boolean(),
    };
}
exports.createRandomRoom = createRandomRoom;
function createRandomUser() {
    return {
        image: faker_1.faker.image.avatar(),
        full_name: faker_1.faker.name.fullName(),
        email: faker_1.faker.internet.email(),
        contact: faker_1.faker.phone.number(),
        description: faker_1.faker.lorem.words(10),
        start_date: faker_1.faker.date.past(),
        status: faker_1.faker.datatype.boolean(),
        password: faker_1.faker.internet.password(),
    };
}
exports.createRandomUser = createRandomUser;
function createRandomContact() {
    return {
        customer: faker_1.faker.name.fullName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        date: faker_1.faker.date.past(1),
        subject: faker_1.faker.lorem.words(10),
        comment: faker_1.faker.lorem.words(30),
        archived: faker_1.faker.datatype.boolean(),
    };
}
exports.createRandomContact = createRandomContact;
const bookingsGenerator = async () => {
    const newBookings = [];
    for (let booking = 0; booking < 20; booking++) {
        const randomBooking = createRandomBooking();
        const newBooking = await (0, connection_1.dbQuery)("INSERT INTO bookings (full_name, order_date, check_in, check_out, room_type, price, image, special_request, description, state) VALUES ?", randomBooking);
        newBookings.push(newBooking);
        console.log(newBookings);
    }
};
const roomsGenerator = async () => {
    const newRooms = [];
    for (let room = 0; room < 20; room++) {
        const randomRoom = createRandomRoom();
        const newRoom = await (0, connection_1.dbQuery)("INSERT INTO rooms (images, bed_type, room_number, description, price, offer, offer_price, cancellation, facilities, status ) VALUES ?", randomRoom);
        newRooms.push(newRoom);
        console.log(newRooms);
    }
};
const usersGenerator = async () => {
    const newUsers = [];
    for (let user = 0; user < 20; user++) {
        const randomUser = createRandomUser();
        const newUser = await (0, connection_1.dbQuery)("INSERT INTO users (image,  full_name, email, contact, description, start_date, status, password ) VALUES ?", randomUser);
        newUsers.push(newUser);
        console.log(newUsers);
    }
};
const contactGenerator = async () => {
    const newContacts = [];
    for (let contact = 0; contact < 20; contact++) {
        const randomContact = createRandomContact();
        const newContact = await (0, connection_1.dbQuery)("INSERT INTO users (customer, email, phone, date, subject, comment, archived ) VALUES ?", randomContact);
        newContacts.push(newContact);
        console.log(newContacts);
    }
};
bookingsGenerator();
roomsGenerator();
usersGenerator();
contactGenerator();
//# sourceMappingURL=seed.js.map