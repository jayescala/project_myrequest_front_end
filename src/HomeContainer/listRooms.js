import React, {Component} from 'react';
import HomeContainer from '../HomeContainer/HomeContainer.js';
import RoomContainer from '../RoomContainer/Room.js';


class ListRooms extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      roomName: '',
      description: '',
      listRooms: []
    }
  }

  componentDidMount() {
    console.log("mounted");
    this.getRooms().then((listRooms) => {
      this.setState({
        listRooms: listRooms.data
      });
      console.log(this.state.listRooms);
    }).catch((err) => {
      console.log(err, 'this is an error in the componentDidMount');
    });


  }

  getRooms = async () => {
    const rooms = await fetch('http://localhost:9000/api/v1/rooms', {
      credentials: 'include',
      method: 'GET'
    });
    console.log(rooms);

    const parsedRoom = rooms.json();
    console.log(parsedRoom);
    return parsedRoom;
  }

  roomsList = () => {
    const roomsList = this.state.listRooms.map((room, i) => {
      return  <li key={room._id}>
                <p>{room.code}</p>
                <p>{room.description}</p>
              </li>
    });
    return roomsList;
    console.log(roomsList);
  }

  render() {
    return(
      <div>
        <ul>
          {this.roomsList()}
        </ul>
      </div>

    )
  }
};

export default ListRooms;
