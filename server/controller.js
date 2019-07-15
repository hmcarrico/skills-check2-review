module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).send(products)
        })
    },
    postProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, imageUrl } = req.body
        db.post_product([name, price, imageUrl]).then(products => {
            res.status(200).send(products)
        })
    },
    updateName: (req, res) => {
        const db = req.app.get('db');
        const {newName} = req.body;
        const {name} = req.query;
        db.update_name([newName, name]).then(products => {
            res.status(200).send(products);
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product([id]).then(() => {
            res.status(200).send('item deleted!')
        })
    }
}