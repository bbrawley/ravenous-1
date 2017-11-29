import React, { Component } from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
     <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList /> 
     </div>

    );
  }
}

export default App;
