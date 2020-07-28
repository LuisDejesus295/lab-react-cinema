import React, { Component } from 'react';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import DisplayMovies from './components/DisplayMovies'
import New from './components/Movies/New'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />



        <Switch>
          <Route exact path='/movies' render={() => <Movies />} />
          <Route exact path='/:id' render={(props) => <DisplayMovies {...props}/>} />
          <Route exact path='/movies/new' render={() => <New />} />
        </Switch>
      </div>
    );
  }
}

export default App;

