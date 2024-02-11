const { Router } = require("express");
const pixController = require("../controllers/pixController.js")

const router = Router();

router.post("/pix/create/immediate/charge", pixController.pixCreateImmediateCharge)

module.exports = router;