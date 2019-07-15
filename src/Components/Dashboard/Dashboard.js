import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        console.log('props in dashbaord',this.props)
        const { inventory, getInventory } = this.props;
        const mappedInventory = inventory.map(product => {
            return <Product product={product} getInventory={getInventory}/>
        })

        return (
            <div>
                Dashboard
                <div className='flex-me'>
                    {mappedInventory}
                </div>
            </div>
        )
    }
}

export default Dashboard;