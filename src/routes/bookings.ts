import express from 'express';
import {getBookings, getBooking, addBooking ,updateBooking, deleteBooking} from '../controllers/bookings';

const bookingsRouter = express.Router()

//Bookings Route

bookingsRouter.get('/', getBookings)
bookingsRouter.get('/:id', getBooking)
bookingsRouter.post('/', addBooking)
bookingsRouter.put('/:id', updateBooking)
bookingsRouter.delete('/:id',deleteBooking)

export default bookingsRouter