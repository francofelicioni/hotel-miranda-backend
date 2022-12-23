import express from 'express';
const bookingsRouter = express.Router()
import {getBookings, getBooking, addBooking ,updateBooking, deleteBooking} from '../controllers/bookings';

//Routes
const path:string = 'bookings';

bookingsRouter.get(`/${path}`, getBookings)
bookingsRouter.get(`/${path}/:id`, getBooking)
bookingsRouter.get(`/${path}`, addBooking)
bookingsRouter.get(`/${path}/:id`, updateBooking)
bookingsRouter.get(`/${path}/:id`, deleteBooking)

export default bookingsRouter;