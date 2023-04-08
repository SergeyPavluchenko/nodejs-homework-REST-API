const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const list = await fs.readFile(contactsPath);
  return JSON.parse(list);
};

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === id);
  return result || null;
};

const removeContact = async (id) => {
  const contactId = String(id);
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex((item) => item.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const newContact = allContacts.filter((_, index) => index !== contactIndex);
  await fs.writeFile(contactsPath, JSON.stringify(newContact, null, 2));
  return allContacts[contactIndex];
};

const addContact = async (data) => {
  const allContacts = await listContacts();
  const newContacts = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContacts;
};

const updateContact = async (id, body) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
