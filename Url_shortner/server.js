const express = require("express");
const mongoose = require("mongoose");
// const shortUrl = require("./models/shortUrl");
const ShortUrl = require("./models/shortUrl")


const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))


app.get("/", async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
})


app.post("/shorturls", async (req, res) => {
    await ShortUrl.create({ full: req.body.fullurl })

    res.redirect('/')
})

app.get('/:shorturl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shorturl })

    if (shortUrl == null) return res.sendStatus(400);

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000)