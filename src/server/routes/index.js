import path from "path";
import mockDataRoutes from "./mock";
import userAuthRoutes from "./userAuth";
import beerRoutes from "./beer";
import stripeRoutes from "./stripe";

module.exports = app => {
  // Mock Data Routes
  mockDataRoutes(app);

  // User Auth Routes
  userAuthRoutes(app);

  // Beer Routes
  beerRoutes(app);

  // Stripe Routes
  stripeRoutes(app);

  // Default CATCH-ALL
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../../dist/index.html"), function(
      err
    ) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
};
