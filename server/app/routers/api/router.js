const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

//  Items router

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

//  Progams router

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

module.exports = router;
