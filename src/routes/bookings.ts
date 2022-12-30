import express from 'express';
import {getBookings, getBooking, addBooking ,updateBooking, deleteBooking} from '../controllers/bookings';

const bookingsRouter = express.Router()

//Bookings Route

bookingsRouter.get('/', getBookings)
bookingsRouter.get('/:id', getBooking)
bookingsRouter.get('/', addBooking)
bookingsRouter.get('/', updateBooking)
bookingsRouter.get('/',deleteBooking)

export default bookingsRouter