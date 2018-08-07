import React, {Component} from 'react';
import RoomContainer from '../RoomContainer/Room.js';

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

handleChange = (e) => {
  this.setState({[e.currentTarget.name]: e.currentTarget.value});
}

  render() {
    console.log(this.props, 'this is props');
    return (

      <form onSubmit={this.props.addRoom.bind(this, this.state)}>
        <label>
          Room Name: <input type="text" name="roomName" onChange={this.handleChange}/>
        </label><br/>
        <label>
          Description: <input type="text" name="description" onChange={this.handleChange}/>
        </label><br/>
        <label>
          Image: <input type="text" name="image" onChange={this.handleChange}/>
        </label><br/>
        <input type="submit" value="Create Room"/>
      </form>
    )
  }
}


  export default CreateRoom;
