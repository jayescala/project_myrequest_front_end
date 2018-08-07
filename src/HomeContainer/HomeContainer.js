import React from "react";
import CreateRoom from "../CreateRoom/CreateRoom.js";

class HomeContainer extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  // getRooms = async () => {
  //   try {
  //     const data = await fetch("http://localhost:9000/api/v1/rooms");
  //     const rooms = data.json();
  //     return rooms;
  //   } catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  // }
  // componentDidMount(){
  //   this.getRooms().then((res) => {
  //     this.setState({
  //       rooms: res.data
  //     });
  //   });
  // }
  render(){
    return(
      <div>
        <h1>HOME CONTAINER</h1>
        <CreateRoom/>
      </div>
    )
  }
}

export default HomeContainer;
