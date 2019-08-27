const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.status(500).json({ message: "Now, young Skywalker, you will die.", err}))
});

module.exports = router;
