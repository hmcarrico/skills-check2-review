const express = require('express');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to db');
});

app.get('/api/inventory', controller.getInventory);
app.post('/api/inventory', controller.postProduct);
app.put('/api/inventory', controller.updateName);
app.delete('/api/inventory/:id', controller.deleteProduct);

const PORT = 4020;
app.listen(PORT, () => console.log(`Kickin back on the coolest port around, ${PORT}`));