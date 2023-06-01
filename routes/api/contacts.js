const express = require("express");
const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.listContacts);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContacts
);

router.get("/:id", authenticate, isValidId, ctrl.getContactsById);

router.delete("/:id", authenticate, isValidId, ctrl.deliteContacts);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContacts
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchemas),
  ctrl.updateFavorite
);

module.exports = router;
