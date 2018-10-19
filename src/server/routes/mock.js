import dashboard from "../mock-data/dashboard";

export default function(app) {
  app.get("/api/mockdata/dashboard", (req, res) => {
    res.send(dashboard);
  });
}
