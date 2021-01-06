import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Cards from './components/Cards'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Filters />
        <Cards /> 
        <Filters />
      </div>
    )
  }

}

export default App;
