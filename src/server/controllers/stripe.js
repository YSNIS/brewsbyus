import beerController from "./beers";

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_SqXeR54ta6fct442Lw87Mfzt");

async function createStripePreauth(req, res) {
  req.body.charge = await makeSingleStripeCharge(req, res);
  beerController.createUserBeer(req, res);
}

async function makeSingleStripeCharge(req, res) {
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  const { stripeToken } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      const charge = await stripe.charges.create({
        amount: 999,
        currency: "usd",
        description: "Example charge",
        source: stripeToken
      });
      resolve(charge);
    } catch (err) {
      console.log(err);
      res.status(err.statusCode).send(err);
    }
  });
}

module.exports = {
  createStripePreauth
};
