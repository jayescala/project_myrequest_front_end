import React, {Component} from 'react';
import Suggestions from "../SuggestionContainer/Suggestions.js";

// this is our search component, searching Spotfiy for artist information
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    this.getQuery().then((data) => {
      this.setState({
        query: data
      });
    }).catch((err) => {
      console.log(err, 'this is an error in the componentDidMount');
    });
  }

  getQuery = async () => {
    const searchInfo = this.state.query();
    const Search = await fetch('http://localhost:9000/api/v1/search/' + searchInfo, {
      credentials: 'include',
      method: 'GET'
    });

    const parsedSearch = Search.json();
    console.log(parsedSearch);
    return parsedSearch;
  }

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  };


  render() {
    // <h1/> is a placeholder, we want artist/track names to render from Spotify
    return(
      <form>
        <input
          placeholder='search for...'
          name='query'
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <Suggestions results={this.state.query}/>
      </form>
    )
  }


};

export default Search;
