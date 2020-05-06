var db = require("../models");

module.exports = function (app) {
    // route that checks for user info during login
    app.put("/api/ser", (req, res) => {
        // Search user table for an item where email & password match
        db.User.findOne({
            where: req.body
        })
            .then(user => {
                // send user id back to client
                res.json(user.id);
            }).cath(err => {
                console.log(err);
                res.send(false)
            })
    })
    // route to register a new user
    app.post("api/user", (req, res) => {
        // create new record for this user
        db.User.create(req.body)
        .then(user => {
            // send back user id to client
            res.json(user.id);
        }).catch(err => {
            console.log(err)
            res.send(false);
        })
    })

    // route that gets information from a specific user
    app.get("/api/user/:id", (req, res) => {
        // find a user where id matches req.params.id
        db.User.findOne({
            where: {
                id: req.params.id
            },
            // specify to send back all columns that aren't password
            attributes: ["id", "firstName", "lastName", "email"]
        }).then(user => {
            res.json(user);
        }).catch(err => {
            console.log(err);
            res.send(false)
        })
    })

    // route to update a specifc user record
    app.put("/api/user/:id", (req, res) => {
        // Update user table info where id matches the params
        db.User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            // send back true
            res.send(true);        
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    })

    // route used to get all projects of a certain user
    app.get("/api/user/:id/events", (req, res) => {
        // search Project table for all projects be a certain user
        db.Project.findAll({
            where: {
                hostId: req.params.id
            }
        }).then(events => {
            res.json(events)
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    })
}