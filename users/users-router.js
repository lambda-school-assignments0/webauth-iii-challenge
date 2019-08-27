const router = require("express").Router();

const Users = require("./users-model.js");

const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err =>
            res
                .status(500)
                .json({ message: "Now, young Skywalker, you will die.", err })
        );
});

router.get("/:id", restricted, (req, res) => {
    const id = req.params;

    Users.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => res.status(500).json({ message: "", err }));
});

router.get("/department/:department", restricted, (req, res) => {
    const department = req.params;

    Users.findBy(department)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.status(500).json({ message: "", err }));
});

module.exports = router;
