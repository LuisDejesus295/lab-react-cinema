import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Movies extends Component {
  state = {
    movieList: []
  }

  async componentDidMount(){
    let res = await axios.get('http://localhost:5000/movies')
    console.log(res)
    this.setState({
      movieList: res.data.movies
    })
  }

  showMovies = () => {
    return this.state.movieList.map((eachMovie) => {
      return <div><img src={eachMovie.image} alt='movieImage'/>
      <h3>{eachMovie.title}</h3>
      <Link to={`/${eachMovie._id}`}>See More</Link>
      </div>
    })
  }
  

  render() {
    console.log(this.state)
    return (
      <div>
        {this.showMovies()}
      </div>
    );
  }
}

export default Movies;