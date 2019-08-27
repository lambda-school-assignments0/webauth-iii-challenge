const router = require("express").Router();

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
    const user = req.body;

    Users.add(user)
        .then(res.status(201).json(user))
        .catch(err => res.status(500).json({ message: "It's a trap!", err }))
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(res.status(200).json({ message: `Welcome ${username}!` }))
        .catch(err => res.status(500).json({ message: "Access denied!", err }))
});

module.exports = router;
