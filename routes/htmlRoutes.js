module.exports = function (app, path) {
    // html routes to individual pages
    app.get("/", (req, res) => {
        res.sendFile("/html/index.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/contact", (req, res) => {
        res.sendFile("/html/contact.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/projects", (req, res) => {
        res.sendFile("/html/projects.html", { root: path.join(__dirname, "../public")})
    })
    app.get("/resume", (req, res) => {
        res.sendFile("/html/resume.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/addProject", (req, res) => {
        res.sendFile("/html/addProject.html", { root: path.join(__dirname, "../public") })
    })
    app.get("/login", (req, res) => {
        res.sendFile("/html/login.html", { root: path.join(__dirname, "../public") })
    })
    // Send about page to all undefined routes
    app.get("*", (req, res) => {
        res.sendFile("/html/index.html", { root: path.join(__dirname, "../public") })
    })
}