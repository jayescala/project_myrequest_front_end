import React, {Component} from 'react';
import Suggestions from "../SuggestionContainer/Suggestions.js";

// this is our search component, searching Spotfiy for artist information
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.getQuery().then((data) => {
  //     console.log(data, "Data");
  //     this.setState({
  //       results: data
  //     });
  //   }).catch((err) => {
  //     console.log(err, 'this is an error in the componentDidMount');
  //   });
  // }

  getQuery = async () => {
    const searchInfo = this.state.query;
    console.log(searchInfo, "searchInfo");
    const Search = await fetch('http://localhost:9000/search/' + searchInfo, {
      credentials: 'include',
      method: 'GET'
    });

    console.log(Search.body, "Search");
    const parsedSearch = await Search.json();
    console.log(parsedSearch, "Parsed Search");

    this.setState({
      results: parsedSearch
    })

    return parsedSearch;
  }

  // handleInputChange = async (event) => {
  //   await this.setState({
  //     [event.currentTarget.name]: event.currentTarget.value
  //   });
  //   this.getQuery();
  // };

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    alert('An artist was submitted: ' + this.state.query);
    event.preventDefault();
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="serch for..." name="query"/>
          <input type="submit" value="submit"/>
          <p>{this.state.query}</p>
        </label>
      </form>
    )
  }


};

export default Search;
