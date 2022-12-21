"use strict";
const express = require('express');
const app = express();
const port = 3000;
const bookingsRouters = require('./routes/bookings');
app.use(bookingsRouters);
app.listen(port, () => {
    console.log('App is online!');
});
