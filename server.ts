import express from 'express';
const app = express()
const port = 3000

import bookingsRouters from './routes/bookings';

app.use(bookingsRouters)

app.listen(port, ()=> {
    console.log('App is online!')
})





