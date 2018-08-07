import React, {Component} from 'react';
<<<<<<< HEAD
=======
import RoomContainer from '../RoomContainer/Room.js'; 
>>>>>>> c17f2ef378104fd0bb6c03bcd4e0078b648ad610

class CreateRoom extends Component {
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
}

  render() {
    console.log(this.props, 'this is props');
    return (

      <form onSubmit={this.props.addRoom.bind(this, this.state)}>
       <input type="submit" />
      </form>
    )
  }


  export default CreateRoom;
