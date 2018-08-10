import React, {Component} from 'react';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
        username: ""
    }
  }
  componentDidMount(){
    this.setState({
      username: this.props.username
    });
  }
  generateUserInfo = () => {
    const username = this.props.username;
    return  <h3>{username}</h3>
  }
  render() {
    console.log(this.generateUserInfo());
    return(
      <div id="user-info-display">
        {this.generateUserInfo()}
      </div>
    )
  }

};

export default UserInfo;
