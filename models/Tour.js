const mongoose = require('mongoose');

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please provide a name'],
      trim: true,
      unique: true,
      minLength: [5, 'Name of the package should be at least 5 character'],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price should be greater than 0'],
    },
    place: {
      type: String,
      required: true,
    },
    journeyDate: {
      type: Date,
      required: true,
    },
    timeSpan: {
      type: Number,
      required: true,
      min: [1, 'Time span should be at least 1 day '],
    },
    numberOfTickets: {
      type: Number,
      required: true,
      min: [10, 'Number of tickets should be at least 10 '],
    },
    ticketStatus: {
      type: String,
      enum: {
        values: ['available', 'booked'],
        message: "Status can't be {VALUE}",
      },
    },
    viewed: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
