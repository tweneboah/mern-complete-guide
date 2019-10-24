
import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {


  componentDidMount(){
    axios.get('api/product/brands')
    .then((res) => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;



