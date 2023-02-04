const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("Main")
})

app.get("/home.ejs", (req, res) => {
    res.render("home")
})

app.get("/about.ejs", (req, res) => {
    res.render("about")
})

app.get("/contact-us.ejs", (req, res) => {
    res.render("contact-us")
})

app.get("/Main.ejs", (req, res) => {
    res.render("Main")
})

app.listen(3000)