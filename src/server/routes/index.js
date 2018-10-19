import path from "path";
import setMockRoutes from "./mock";
import setUserRoutes from "./user";

module.exports = app => {
  // Mock Data Routes
  setMockRoutes(app);

  // User Routes
  setUserRoutes(app);

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
