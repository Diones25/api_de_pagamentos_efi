const { Router } = require("express");
const pixController = require("../controllers/pixController.js")

const router = Router();

router.get("/", pixController.pixCreateImmediateCharge)

module.exports = router;