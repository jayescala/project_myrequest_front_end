import React, {Component} from 'react';
import Search from "./Search/Search.js";
import Chat from "./Chat/Chat.js";

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
  getRoom = async () => {
    const roomCode = this.getCode();
    const room = await fetch('https://myrequest-app.herokuapp.com/rooms/' + roomCode, {
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
      </div>
    )
  }
}

  export default Room;
