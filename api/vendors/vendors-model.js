const db = require("../../database/db-config.js");

module.exports = {
  addVendor,
  getVendorsBy,
  getVendorById,
  getVendors,
  updateVendor,
  deleteVendor,
};

function getVendors() {
  return db("vendors");
}

function getVendorsBy(filter) {
  return db("vendors").where(filter);
}

function getVendorById(id) {
  return db("vendors")
    .where({ id })
    .first();
}

function addVendor(vendor) {
  return db("vendors")
    .insert(vendor, "id")
    .then(([id]) => getVendorById(id));
}

function updateVendor(changes, id) {
  return db("vendors")
    .where("id", id)
    .update(changes)
    .then(outcome => getVendorById(id));
}

function deleteVendor(id) {
  return db("vendors")
    .where("id", id)
    .del();
}
