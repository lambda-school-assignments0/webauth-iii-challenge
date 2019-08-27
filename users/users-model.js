const db = require("../database/db-config.js");

function add(user) {
    return db("users").insert(user);
}

function find() {
    return db("users");
}

function findBy(category) {
    return db("users").where(category);
}

function findById(id) {
    return db("users").where(id);
}

module.exports = {
    add,
    find,
    findBy,
    findById
};
