import React, { Component } from 'react';
import Axios from 'axios';

class New extends Component {
  state = {
  }

onChangeHandler = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

createMovie = async (e) => {
  e.preventDefault();
  let res = await Axios.post('http://localhost:5000/movies/new', this.state);
  console.log(res)
}

  render() {
    return (
      <div>
        <form onSubmit = {this.createMovie}>
          <label>Director</label>
          <br />
          <input type='text' onChange={this.onChangeHandler} name='director'/>
          <br />
          <label>Title</label>
          <br />
          <input type='text' onChange={this.onChangeHandler} name='title'/>
          <br />
          <label>Description</label>
          <br />
          <input type='text' onChange={this.onChangeHandler} name='description'/>
          <br />
          <label>Stars</label>
          <br />
          <input type='text' onChange={this.onChangeHandler} name='stars'/>
          <br />
          <label>Showtimes</label>
          <br />
          <input type='text' onChange={this.onChangeHandler} name='showtimes'/>
          <br />
          <button type='submit' value='submit'>Sumbit</button>
        </form>
      </div>
    );
  }
}

export default New;