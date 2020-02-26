// Härifrån startar vi upp vår webshop
const mongoose = require('mongoose')
const dbUrl = process.env.MONGO_ATLAS_URL || require('./config/config').databaseURL

const { app, port } = require('./src/server')

/* if (process.env.NODE_ENV == 'production') {
    dbConfig.databaseURL = process.env.MONGO_ATLAS_URL // värdet hämtas från miljövariabeln i heroku
} else {
    const dbConfig = require('./config/config')
} */

// Kicka igång servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(dbUrl, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`))
})

module.exports = { app, port }