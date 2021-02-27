import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"
import axios from "axios";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [ ],
      searchField: ""
    }
  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then( res => res.json())
    // .then( users => console.log(users))
    const getUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({ monsters: res.data })
      } catch (e) {
        console.log("some err")
      }
    }
    getUsers();
  }
  changeHandle = e =>{
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField} = this.state;
    const filterMonsters = monsters.filter( monster => ( monster.name.toLowerCase().includes(searchField.toLowerCase())))
    return (
      <div className='App'>
        <h1> Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' changeHandle={ this.changeHandle }/>
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
