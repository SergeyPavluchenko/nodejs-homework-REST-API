const express = require("express");
const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.post("/", validateBody(schemas.addSchema), ctrl.addContacts);

router.get("/:id", isValidId, ctrl.getContactsById);

router.delete("/:id", isValidId, ctrl.deliteContacts);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContacts
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchemas),
  ctrl.updateFavorite
);

module.exports = router;
