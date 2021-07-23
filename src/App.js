
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

// import logo from './logo.svg'; NO LOGO

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ list : users }));
  }


  handleChange = e => {
    this.setState({ searchField : e.target.value });
  }
  render() {
    const { list, searchField } = this.state;
    const filteredList = list.filter(list => 
      list.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robo - Contacts</h1>
        <SearchBox 
          placeholder='search contacts'
          handleChange={this.handleChange}
        />
        <CardList list= {filteredList} />
      </div>
    );
  }
}
export default App;