const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

//Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  res.send(getReturns(boughtAt, marketPrice, quantity).toString());
});

function getReturns(boughtAt, marketPrice, quantity) {
  let returns = (marketPrice - boughtAt) * quantity;
  return returns;
}

//Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(getTotalReturns(stock1, stock2, stock3, stock4).toString());
});

function getTotalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

//Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(getReturnPercentage(boughtAt, returns).toString());
});

function getReturnPercentage(boughtAt, returns) {
  let result = (returns / boughtAt) * 100;
  return result;
}

//Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(getTotalReturnPercentage(stock1, stock2, stock3, stock4).toString());
});

function getTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

//Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(getStatus(returnPercentage));
});

function getStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
