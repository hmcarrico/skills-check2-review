import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            imgUrl: '',
            productName: '',
            price: ''
        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInputs = () => {
        this.setState({
            imgUrl: '',
            productName: '',
            price: ''
        })
    }

    render(){
        const { imgUrl, productName, price } = this.state;
        return (
            <div>
                <h1>Add Product</h1>
                <div>
                Image Url: <input
                            name='imgUrl'
                            onChange={(e) => this.handleInputs(e)}
                            value={imgUrl}
                            />
                </div>
                <div>
                Product Name: <input
                                name='productName'
                                onChange={(e) => this.handleInputs(e)}
                                value={productName}
                                />
                </div>
                <div>
                Price: <input
                        name='price'
                        onChange={(e) => this.handleInputs(e)}
                        value={price}
                        />
                </div>
                <button onClick={() => this.resetInputs()}>Cancel</button>
                <button onClick={() => this.props.postProduct(productName, price, imgUrl)}>Add Inventory</button>
            </div>
        )
    }
}

export default Form;