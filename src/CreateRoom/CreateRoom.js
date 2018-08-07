import React, {Component} from 'react';

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
