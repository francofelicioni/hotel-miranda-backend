"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomContact = exports.createRandomUser = exports.createRandomRoom = exports.createRandomBooking = void 0;
const faker_1 = require("@faker-js/faker");
const connection_1 = require("./connection");
const bcrypt_1 = __importDefault(require("bcrypt"));
const password = async (pass) => {
    return await bcrypt_1.default.hash(pass, 10).then((result) => result);
};
const createRandomBooking = () => {
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
        state: faker_1.faker.helpers.arrayElement(["Check In", "Check Out", "In Progress"]),
    };
};
exports.createRandomBooking = createRandomBooking;
const createRandomRoom = () => {
    return {
        images: faker_1.faker.image.imageUrl(500, 500, "hotel room", false),
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
        facilities: String(faker_1.faker.helpers.arrayElements([
            "AC",
            "Bath",
            "Sea View",
            "Late Checkout",
            "City Tour",
            "Led TV",
            "Wifi",
            "Breakfast",
        ])),
        status: faker_1.faker.datatype.boolean(),
    };
};
exports.createRandomRoom = createRandomRoom;
const createRandomUser = async () => {
    return {
        image: faker_1.faker.image.avatar(),
        full_name: faker_1.faker.name.fullName(),
        email: faker_1.faker.internet.email(),
        contact: faker_1.faker.phone.number(),
        description: faker_1.faker.lorem.words(10),
        start_date: faker_1.faker.date.past(),
        status: faker_1.faker.datatype.boolean(),
        password: await password(faker_1.faker.internet.password()),
    };
};
exports.createRandomUser = createRandomUser;
const createRandomContact = () => {
    return {
        customer: faker_1.faker.name.fullName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        date: faker_1.faker.date.past(1),
        subject: faker_1.faker.lorem.words(10),
        comment: faker_1.faker.lorem.words(30),
        archived: faker_1.faker.datatype.boolean(),
    };
};
exports.createRandomContact = createRandomContact;
const roomsCreator = () => {
    for (let i = 0; i < 20; i++) {
        const randomRoom = (0, exports.createRandomRoom)();
        (0, connection_1.dbQuery)("INSERT INTO rooms SET ?", randomRoom);
    }
};
const bookingsCreator = () => {
    for (let i = 0; i < 20; i++) {
        const randomBooking = (0, exports.createRandomBooking)();
        (0, connection_1.dbQuery)("INSERT INTO bookings SET ?", randomBooking);
    }
};
const usersCreator = () => {
    for (let i = 0; i < 20; i++) {
        const randomUser = (0, exports.createRandomUser)();
        (0, connection_1.dbQuery)("INSERT INTO users SET ?", randomUser);
    }
};
const contactsCreator = () => {
    for (let i = 0; i < 20; i++) {
        const randomContact = (0, exports.createRandomContact)();
        (0, connection_1.dbQuery)("INSERT INTO contacts SET ?", randomContact);
    }
};
const run = () => {
    roomsCreator();
    bookingsCreator();
    usersCreator();
    contactsCreator();
};
run();
//# sourceMappingURL=seed.js.map