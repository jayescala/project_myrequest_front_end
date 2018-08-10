// First make the playlist component -- done
// add button
// Playlist component is composed of:
  // fetch request to get rooms.approvedRequests track ID
  // list out the track names from the approvedRequests
  // may have to purge your rooms so that the room ID is unique
  // example findOne({code: location.pathName})


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
    <Playlist />
  )
}

};

export default Playlist;
