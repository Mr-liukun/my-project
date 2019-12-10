import React, { Component } from "react";

class ListUsers extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {item, index, counts} = this.props;
    return(
      <h2>{item}已经点赞 {counts[index]} 次</h2>
    )
  }
}

export default ListUsers;