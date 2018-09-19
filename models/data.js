var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
  advisorEmail: {
    type: String
  },
  data: {
    type: Array
  },
  accountNumber: {
    type: Number,
    required: true,
    trim: true
  },
  advisor: {
    type: String,
    required: true,
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  accountBalance: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  accountValue: {
    type: Number,
    required: true,
    trim: true
  },
  moneyMarket: {
    type: Number,
    required: true,
    trim: true
  },
  buyingPower: {
    type: Number,
    required: true,
    trim: true
  },
  netBalance: {
    type: Number,
    required: true,
    trim: true
  },
  aumPercentage: {
    type: Number,
    required: true,
    trim: true
  },
  billBy: {
    type: Number,
    required: true,
    trim: true
  }
});
var Data = mongoose.model('Table', DataSchema);
module.exports = Data;
