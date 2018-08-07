import React from "react";
import CreateRoom from "../CreateRoom/CreateRoom.js";

class HomeContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      rooms:[]
    }
  }
  getRooms = async () => {
    try {
      const data = await fetch("http://localhost:9000/api/v1/rooms");
      const rooms = data.json();
      return rooms;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  componentDidMount(){
    this.getRooms().then((res) => {
      this.setState({
        rooms: res.data
      });
    });
  }
  addRoom = async (room, event) => {
  event.preventDefault();
  try {
    const createdRoom = await fetch("http://localhost:9000/api/v1/rooms", {
      method: "post",
      body: JSON.stringify(room),
      headers: {
        "content-type": "application/json"
      }
    });
    const parsedResponse = await createdRoom.json();
    console.log(room);
    this.state = room;
    console.log(room);
    this.props.history.push("/room/" + this.state.code);
  } catch(err) {
    console.log(err);
  }
}
  render(){
    return(
      <div>
        <h1>HOME CONTAINER</h1>
        <CreateRoom addRoom={this.addRoom}/>
      </div>
    )
  }
}

export default HomeContainer;
