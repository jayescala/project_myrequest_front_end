<<<<<<< HEAD
import React, { Component } from "react";
import UserInfo from "./UserInfo/UserInfo.js";
import RoomList from "./RoomList/RoomList.js";
import CreateRoom from "./CreateRoom/CreateRoom.js";
import SearchRoom from "./SearchRoom/SearchRoom.js";
=======
import React from "react";
import CreateRoom from "../CreateRoom/CreateRoom.js";
import ListRooms from "./listRooms.js";
import UserInfo from "./userInfo.js";
>>>>>>> 8673ea7e34fbce76699bca494ee30c04c61c88b4

class HomeContainer extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      roomCode: ""
    }
  }
  getRooms = async () => {
    try {
      const data = await fetch("http://localhost:9000/rooms");
      const rooms = data.json();
      return rooms;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  componentDidMount = async () => {
    try {
      this.setState({
        username: this.props.history.location.state.username
      });
    } catch(err) {
      console.log(err);
      this.props.history.push("/");
    }
  }
  addRoom = async (room, event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:9000/rooms", {
        method: "post",
        body: JSON.stringify(room),
        headers: {
          "content-type": "application/json"
        }
      });
      this.state = room;
      this.props.history.push("/room/" + this.state.roomCode);
    } catch(err) {
      console.log(err);
    }
  }

  render(){
    return(
      <div>
<<<<<<< HEAD
        <h1>Home</h1>
        <div id="home-container">
          <div id="user-info-component" class="home-column">
            <UserInfo username={this.state.username}/>
          </div>
          <div id="room-list-component" class="home-column">
            <h3>Open Rooms</h3>
            <RoomList />
          </div>
          <div id="create-room-component" class="home-column">
            <CreateRoom addRoom={this.addRoom}/>
            <SearchRoom history={this.props.history}/>
          </div>
        </div>
=======
        <h1>HOME CONTAINER</h1>
        <UserInfo />
        <CreateRoom addRoom={this.addRoom}/>
        <ListRooms />

>>>>>>> 8673ea7e34fbce76699bca494ee30c04c61c88b4
      </div>
    )
  }
};

export default HomeContainer;
