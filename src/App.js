import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  postProduct = (name, price, imageUrl) => {
    axios.post('/api/inventory', {name, price, imageUrl}).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render(){
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Form postProduct={this.postProduct}/>
        <Dashboard  inventory={inventory} getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
