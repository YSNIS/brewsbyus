const db = require("../models");
import { Beer, BeerJob, StatusUpdateEntry, BeerPurchase } from "../models";

async function createUserBeer(req, res) {
  let transaction;
  const { userId, beerTypeId } = req.body;

  try {
    transaction = await db.sequelize.transaction();

    const beer = await Beer.create(
      {
        userId,
        beerTypeId
      },
      { transaction }
    );

    const beerJob = await BeerJob.create(
      {
        beerId: beer.id
      },
      { transaction }
    );

    const statusUpdate = await StatusUpdateEntry.create(
      {
        beerJobId: beerJob.id,
        statusId: 1
      },
      { transaction }
    );

    const beerPurchase = await BeerPurchase.create(
      {
        userId: userId,
        beerJobId: beerJob.id
      },
      { transaction }
    );

    await transaction.commit();

    res.status(201).send({
      beer,
      beerJob,
      statusUpdate
    });
  } catch (err) {
    await transaction.rollback();
    res.status(400).send("Failed to create beer!");
  }
  transaction = await db.sequelize.transaction();
}

module.exports = {
  createUserBeer
};
