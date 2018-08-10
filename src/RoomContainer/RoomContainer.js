import React, {Component} from 'react';
<<<<<<< HEAD:src/RoomContainer/RoomContainer.js
import Search from "./Search/Search.js";
import Chat from "./Chat/Chat.js";
=======
import CreateRoom from '../CreateRoom/CreateRoom.js';
import queryString from 'query-string';
import SearchContainer from "../SearchContainer/Search.js";
>>>>>>> 8673ea7e34fbce76699bca494ee30c04c61c88b4:src/RoomContainer/Room.js

class Room extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      createdByUsername: '',
      createdByUserId: '',
      comments: '',
      pendingRequest: '',
      approvedRequest: '',
      roomName: '',
      description: '',
      image: '',
      tracks: []
    }
  }
<<<<<<< HEAD:src/RoomContainer/RoomContainer.js
=======

  componentDidMount() {
    console.log(window.location);
    console.log(queryString);
    const parsed = queryString.parse(window.location.search);
    console.log(parsed)
    const accessToken = parsed.access_token;

    fetch("http://api.spotify.com/v1/me", {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json()).then(data => console.log(data))


    this.getRoom().then((Room) => {
      this.setState({
        Room: Room.data
      });
    }).catch((err) => {
      console.log(err, 'this is an error in the componentDidMount');
    });
  }

>>>>>>> 8673ea7e34fbce76699bca494ee30c04c61c88b4:src/RoomContainer/Room.js
  getRoom = async () => {
    const roomCode = this.getCode();
    const room = await fetch('http://localhost:9000/rooms/' + roomCode, {
      credentials: 'include',
      method: 'GET'
    });

    const parsedRoom = room.json();
    console.log(parsedRoom);
    return parsedRoom
  }

  // addTracks = async (track, event) => {
  //   this.state.tracks.push(track);
  //   console.log(this.state.tracks);
  // }

  getCode = () => {

    const pathName = this.props.location.pathname;

    const pathNameArray = pathName.split("/");

    const roomCode = pathNameArray[pathNameArray.length - 1]

    return roomCode;
  }

  deleteRoom = async (id, e) => {
    e.preventDefault();
    console.log('deleteRoom function is being called, this is the id:', id);
    try {
      const deleteRoom = await fetch('http://localhost:9000/room/' + id, {
        method: 'DELETE'
      });

      const parsedRoom = await deleteRoom.json();
      this.setState({room: this.state.room.filter((room, i) => room._id)});

    } catch(err) {
      console.log(err);
    }
  }




  render() {
    return (
      <div>
<<<<<<< HEAD:src/RoomContainer/RoomContainer.js
        <h1>Room: {this.state.code}</h1>
        <div id="home-container">
          <div id="search-component" className="home-column">
            <Search addTracks={this.addTracks}/>
          </div>
          <div id="playlist-component" className="home-column">
            <h3>Playlist</h3>
          </div>
          <div id="chat-component" className="home-column">
            <Chat />
          </div>
        </div>
=======
        <h1>This is the room</h1>
        <SearchContainer />
>>>>>>> 8673ea7e34fbce76699bca494ee30c04c61c88b4:src/RoomContainer/Room.js
      </div>
    )
  }
}

  export default Room;
