import React from "react";

class HomeContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      showEdit: false,
      editMovieId: null,
      movieToEdit: {
        title: "",
        description: ""
      },
      title: "",
      description: ""
    }
  }
  getMovies = async () => {
    try {
      const data = await fetch("http://localhost:9000/api/v1/movies");
      const movies = data.json();
      return movies;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  componentDidMount(){
    this.getMovies().then((res) => {
      this.setState({
        movies: res.data
      });
    });
  }
  render(){
    return(
      <div>
        <h1>HOME CONTAINER</h1>
        <MovieForm addMovie={this.addMovie}/>
      </div>
    )
  }
}

export default HomeContainer;
