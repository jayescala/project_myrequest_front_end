import React, {Component} from 'react';
import HomeContainer from '../HomeContainer/HomeContainer.js';
import RoomContainer from '../RoomContainer/Room.js';


class listRooms extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      roomName: '',
      description: ''
    }
  }

  componentDidMount() {
    this.getRooms().then((listRooms) => {
      this.setState({
        listRooms: listRooms.data
      });
    }).catch((err) => {
      console.log(err, 'this is an error in the componentDidMount');
    });

    const parsedRoom = listRooms.json();
    console.log(parsedRoom);
    return parsedRoom;
  }

  getRooms = async () => {
    const roomCode = this.getCode()
    const room = await fetch('http://localhost:9000/api/v1/rooms/', roomCode {
      credentials: 'include',
      method: 'GET'
    });
  }

  render() {
    return(
      <div>
        <h3>{this.code}</h3>
        <h3>{this.roomName}</h3>
        <h3>{this.description}</h3>
      </div>

    )
  }
};

export default Rooms;
