import React, {Component} from 'react';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
        userName: ''
    }
  }

  render() {
    console.log('this is userInfo component')
    return(
        <h1>
          {this.state.userName}
        </h1>
    )
  }

};

export default UserInfo;
