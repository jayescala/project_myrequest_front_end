import React, {Component} from 'react';
import RoomContainer from '../RoomContainer/Room.js';

class Playlist extends Component {
  constructor() {
    super();
    this.state = {
      approvedRequest: '',
      pendingRequest: ''
    }
  }

getApprovedRequest = async () => {
  const getRooms = this.getRoom();
  const approvedRequest = await fetch('http://localhost:9000/api/v1/rooms/' + getRooms, {
    credentials: '',
    method: 'GET'
  });

  const parsedRequest = approvedRequest.json();
  console.log(parsedRequest);
  return approvedRequest;
}

render() {
  return (
    <div id="approved-requests">

    </div>
  )
}

};

export default Playlist;
