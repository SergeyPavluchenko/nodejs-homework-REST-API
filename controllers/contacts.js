const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactsById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContacts = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deliteContacts = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delele success",
  });
};

const updateContacts = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactsById: ctrlWrapper(getContactsById),
  addContacts: ctrlWrapper(addContacts),
  deliteContacts: ctrlWrapper(deliteContacts),
  updateContacts: ctrlWrapper(updateContacts),
  updateFavorite: ctrlWrapper(updateFavorite),
};
