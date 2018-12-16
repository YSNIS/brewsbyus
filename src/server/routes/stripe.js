import stripeController from "../controllers/stripe";

export default function(app) {
  app.post("/api/stripe/preauth", stripeController.createStripePreauth);
}
