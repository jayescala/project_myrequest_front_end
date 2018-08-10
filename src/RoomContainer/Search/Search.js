import React, {Component} from "react";
import Suggestions from "./Suggestions/Suggestions.js";

const heroku = "https://myrequest-app.herokuapp.com";
const localhost = "http://localhost:9000";
const activehost = heroku;

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
    const Search = await fetch(activehost + "/search/" + searchInfo, {
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
    console.log(track);
    let playlist = "<p>" + track + "</p>"
    document.getElementById("approved-requests").innerHTML+=playlist;
  }
  // generateApprovedPlaylist = () => {
  //   const approvedPlaylist = this.state.tracks.map(result => {
  //     console.log(result);
  //     return  <li>{result}</li>
  //   });
  //   return (
  //     <ul>
  //       {approvedPlaylist}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div id="search-component">
        <h3>Search</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleInputChange} placeholder="search for..." name="query"/>
          <button type="submit">Search</button>
        </form>
        <h3>Playlist</h3>
        <div id="approved-requests">

        </div>
        <div id="suggestion-component">
          {this.state.results != "" ? <Suggestions results={this.state.results} addTrack={this.addTracks}/> : null}
        </div>
      </div>
    )
  }
};

export default Search;
