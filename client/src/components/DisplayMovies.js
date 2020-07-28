import React, { Component } from 'react';
import axios from 'axios'

class DisplayMovies extends Component {
  state = {
    theMovie: {}
  }

  async componentDidMount(){
    let res = await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`)
    console.log(res)
    this.setState({
      theMovie: res.data.movies
    })
    console.log(this.state.movieList)
  }

  displayMovies = () => {
    const eachMovie = this.state.theMovie
    if(eachMovie)
      return <div><img src={eachMovie.image} alt='movieImage'/>
      <h3>{eachMovie.title}</h3>
      <ul>
        <li>{eachMovie.director}</li>
        <li>{eachMovie.stars}</li>
        <li>{eachMovie.description}</li>
      </ul>
      </div>
  }




  render() {
    console.log(this.props)
    return (
      <div>
        {this.displayMovies()}
      </div>
    );
  }
}

export default DisplayMovies;