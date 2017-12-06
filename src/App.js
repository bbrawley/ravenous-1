import React, { Component } from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';
import Yelp from './src/util/Yelp';
import logo from './logo.svg';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        };
        this.searchYelp = this.searchYelp.bind(this);
    }
  searchYelp(term, location, sortBy) {
    return Yelp.search(term, location, sortBy).then(businesses =>(
    setState({businesses: businesses})
    ));  
  }
    
    render() {
      return (
       <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/> 
     </div>

    );
  }
}

export default App;
