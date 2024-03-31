'use strict'
const Mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.db;

Mongoose.connect(uri)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log('Failed to connect to MongoDB', err));

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.Mongoose = Mongoose;