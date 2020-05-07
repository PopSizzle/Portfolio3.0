var db = require("../models");
const path = require("path");

module.exports = function (app) {

    // ***Potential future functionality with multiple users ***
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
    app.get("/api/user/:id/projects", (req, res) => {
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
    // ***********************************

    // route to get all projects
    app.get("/api/project", (req, res) => {

        db.Project.findAll({})
            .then(projects => {
                res.json(projects);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to create a new project
    app.post("/api/project", (req, res) => {

        db.Project.create(req.body)
            .then(() => {
                res.send(true);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route to update a project
    app.put("/api/project/:id", (req, res) => {
        db.Project.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                res.send(true);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to delete a project
    app.delete("/api/project/:id", (req, res) => {
        db.Project.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.send(true)
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to create a tool
    app.post("/api/tool", (req, res) => {
        db.Tool.create(req.body)
            .then(() => {
                res.send(true);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to delete a tool
    app.delete("/api/tool/:id", (req, res) => {
        db.Tool.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.send(true)
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to create a ProjectTool
    app.post("/api/projecttool", (req, res) => {
        db.ProjectTool.create(req.body)
            .then(() => {
                res.send(true);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to delete a ProjectTool
    app.delete("/api/projecttool/:id", (req, res) => {
        db.ProjectTool.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.send(true)
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })

    // route used to create a Contact
    app.post("/api/contact", (req, res) => {
        db.Contact.create(req.body)
            .then(() => {
                res.send(true);
            }).catch(err => {
                console.log(err);
                res.send(false);
            })
    })
}