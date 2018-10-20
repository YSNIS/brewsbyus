import path from "path";
import mockDataRoutes from "./mock";
import userRoutes from "./user";

module.exports = app => {
  // Mock Data Routes
  mockDataRoutes(app);

  // User Routes
  userRoutes(app);

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
