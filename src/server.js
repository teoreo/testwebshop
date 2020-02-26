// Här ska vi definiera vår server! Men vi ska inte starta den
// (alltså app.listen(port, ()=>{}), har vi inte i denna fil, utan i index.js)
const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const app = express()
const port = process.env.PORT || 8080 // använd porten eller annars 8080
const productItem = require('../model/product')

const ROUTE = {
    product: '/product',
    gallery: '/gallery',
    addProduct: '/add-product'
}

const VIEW = {
    gallery: 'gallery',
    product: 'product'
}
if (process.env.NODE_ENV == 'development'){
    const sassMiddleware = require('node-sass-middleware')
app.use(sassMiddleware({ // tell sassMiddleware where src file and dest directory is
    src: 'sass',
    dest: 'public',
    // debug: true, // för att skriva ut data till konsollen
    outputStyle: 'compressed'
    }))
}

// define a static folder, 'public'
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
// define what view engine to use, ejs in this case
app.set('view engine', 'ejs')




// ------------------  Routs  -------------------//
app.get(ROUTE.gallery, (req, res) => {
    res.status(200).render(VIEW.gallery, {})
})

app.get(ROUTE.product, (req, res) => {
    res.status(200).render(VIEW.product, {})
})

app.post(ROUTE.addProduct, (req, res) => {
    // spara ny produkt
    new productItem({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    }).save() // och spara till databasen

    res.status(200).redirect(ROUTE.gallery)
})

module.exports = { app, port, express }

class Enklass{
    constructor(){
        this.name = 'Klassens namns'
    }
    }
    const enKlass = new Enklass();