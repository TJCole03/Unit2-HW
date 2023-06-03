require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3002
const app = express();
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine');
const Item = require('./models/item');

app.use(express.json());
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

let items = [];

                //callback function; handler
app.get('/items', (req, res) => {
    res.json(items);
})
//creating new data on server
app.post('/items', async (req, res) => {
    if (req.body.name && req.body.price) {
    } else {
        res.status(400).send({ message: error.message })
    } try {
        const createItem = await Item.create(req.body)
        res.redirect(`/items/${createItem._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
});

app.get('/items/:id', async (req, res) => {
    try {
        const foundItem = await Item.findOne({ _id: req.params.id })
        res.render('items/Show', {
            item: foundItem
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.put('items/:id', (req, res) => {
    const item = items.find(x => x.id === parseInt(req.params.id))
    if (!item) return res.status(400).json({ message: "Item not found" });
    
    Object.assign(item, req.body);
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(x => x.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Item not found" });

    items.splice(index, 1);
    res.sendStatus(204);
})

app.listen(PORT, function () {
    console.log("listening 3002")
}) 