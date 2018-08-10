import React, {Component} from "react";
import Suggestions from "./Suggestions/Suggestions.js";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: "",
      tracks: []
    }
  }
  getQuery = async () => {
    const searchInfo = await this.state.query;
    const Search = await fetch('http://localhost:9000/search/' + searchInfo, {
      credentials: "include",
      method: "get"
    });
    console.log(Search);
    const parsedSearch = await Search.json();
    console.log(parsedSearch);
    this.setState({results: parsedSearch});
  }
  handleInputChange = async (event) => {
    await this.setState({query: event.currentTarget.value});
    this.getQuery();
  }
  handleSubmit(event){
    event.preventDefault();
  }
  addTracks = async (track, event) => {
    this.state.tracks.push(track);
    const approvedPlaylist = this.generateApprovedPlaylist();
  }
  generateApprovedPlaylist = () => {
    const approvedPlaylist = this.state.tracks.map(result => {
      console.log(result);
      return  <li>{result}</li>
    });
    return (
      <ul>
        {approvedPlaylist}
      </ul>
    );
  }
  render() {
    return (
      <div id="search-component">
        {this.generateApprovedPlaylist()}
        <h3>Search</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleInputChange} placeholder="search for..." name="query"/>
          <button type="submit">Search</button>
        </form>
        <div id="suggestion-component">
          {this.state.results != "" ? <Suggestions results={this.state.results} addTrack={this.addTracks}/> : null}
        </div>
      </div>
    )
  }
};

export default Search;
