const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ackuity:WZybf45fNolbK7J3@cluster0.h8flluq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

module.exports = connectDB;
