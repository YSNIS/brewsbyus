import { beers } from "../controllers";

export default function(app) {
  app.post("/api/beer", beers.createUserBeer);
}
