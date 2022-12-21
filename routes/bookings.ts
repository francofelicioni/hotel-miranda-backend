import express from 'express';
const bookingRouter = express.Router()
import {getBookings, getBooking, addBooking ,updateBooking, deleteBooking} from '../controllers/bookings';

//Routes
const path:string = 'bookings';

bookingRouter.get(`/${path}`, getBookings)
bookingRouter.get(`/${path}/:id`, getBooking)
bookingRouter.get(`/${path}`, addBooking)
bookingRouter.get(`/${path}/:id`, updateBooking)
bookingRouter.get(`/${path}/:id`, deleteBooking)

export default bookingRouter;