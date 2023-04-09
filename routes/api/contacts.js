const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");
const shemas = require("../../shemas/contacts");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactsById);

router.post("/", validateBody(shemas.addShema), ctrl.addContacts);

router.delete("/:id", ctrl.deliteContacts);

router.put("/:id", validateBody(shemas.addShema), ctrl.updateContacts);

module.exports = router;
