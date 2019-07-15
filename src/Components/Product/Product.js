import React, {Component} from 'react';
import axios from 'axios';
import './Product.css';

class Product extends Component {
    constructor(){
        super();
        this.state = {
            newName: ''
        }
    }

    updateName = (name) => {
        const {newName} = this.state;
        axios.put(`/api/inventory?name=${name}`, {newName}).then(res => {
            this.props.getInventory()
        })
    }

    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
            console.log(res)
            this.props.getInventory()
        })
    }

    render(){
        const { product } = this.props;
        return (
        <div className='products'>
            <button onClick={() => this.deleteProduct(product.id)}>DELETE ME</button>
            {product.name}
            <img src={product.imgurl} />
            ${product.price} <br />
            Change Name: <input onChange={(e) => this.setState({newName: e.target.value})}/>
            <button onClick={() => this.updateName(product.name)}>UPDATE ME</button>
        </div>
    )
    }
    
}

export default Product;