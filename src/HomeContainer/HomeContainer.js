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
    this.setState({
      title: "",
      description: "",
      rooms: [...this.state.rooms, parsedResponse.data]
    });
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
