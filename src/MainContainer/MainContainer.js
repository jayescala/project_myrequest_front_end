import React from "react";

class MainContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      showEdit: false,
      editMovieId: null,
      movieToEdit: {
        title: "",
        description: ""
      },
      title: "",
      description: ""
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
        <h1>MAIN CONTAINER</h1>
      </div>
    )
  }
}

export default MainContainer;
