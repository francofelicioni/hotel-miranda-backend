CREATE DATABASE hotel_miranda_backend;

USE hotel_miranda_backend;

CREATE TABLE rooms(
    id INT NOT NULL PRIMARY KEY AUTO INCREMENTAL,
    images TEXT,
    bed_type VARCHAR (10),
    room_number INT,
    description TEXT NOT NULL,
    price INT,
    offer INT,
    offer_price INT,
    cancellation VARCHAR (255),
    facilities VARCHAR (255),
    status BOOLEAN
);

CREATE TABLE bookings (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image TEXT,
    full_name VARCHAR(25),
    order_date DATE NOT NULL,
    check_in DATETIME NOT NULL,
    check_out DATE NOT NULL,
    special_request VARCHAR (255),
    room_type VARCHAR (45) NOT NULL,
    price INT NOT NULL,
    facilities VARCHAR (255) NOT NULL,
    state VARCHAR(45) NOT NULL,
);

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO INCREMENT,
    image TEXT,
    full_name VARCHAR(45) NOT NULL,
    email TEXT NOT NULL,
    contact VARCHAR (45) NOT NULL,
    description VARCHAR (255) NOT NULL,
    start_date DATE NOT NULL,
    status BOOLEAN NOT NULL,
    password TEXT NOT NULL,
)

CREATE TABLE contact (
    id INT NOT NULL PRIMARYKEY AUTO INCREMENTAL,
    customer TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date DATE,
    subject VARCHAR(45) NOT NULL,
    comment VARCHAR(255) NOT NULL,
)