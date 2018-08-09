import React, {Component} from 'react';
import CreateRoom from '../CreateRoom/CreateRoom.js';
import queryString from 'query-string';

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
      image: ''
    }
  }

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

  getRoom = async () => {
    const roomCode = this.getCode();
    const room = await fetch('http://localhost:9000/api/v1/rooms/' + roomCode, {
      credentials: 'include',
      method: 'GET'
    });

    const parsedRoom = room.json();
    console.log(parsedRoom);
    return parsedRoom
  }

  getCode = () => {

    const pathName = this.props.location.pathname;

    const pathNameArray = pathName.split("/");

    const roomCode = pathNameArray[pathNameArray.length - 1]

    return roomCode;
  }


  addRoom = async (room, e) => {
    e.preventDefault();
    try {
      const createRoom = await fetch('http://localhost:9000/api/v1/rooms', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(room),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createRoom.json();

      this.state({room: [...this.state.room, parsedResponse.data]})
    } catch(err) {
      console.log(err)
    }
  }

  deleteRoom = async (id, e) => {
    e.preventDefault();
    console.log('deleteRoom function is being called, this is the id:', id);
    try {
      const deleteRoom = await fetch('http://localhost:9000/api/v1/room/' + id, {
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
        <h1>This is the room</h1>
      </div>
    )
  }
}

  export default Room;
