import React, { Component } from "react";

class ListCounts extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    const {butt,  item, index} = this.props;
    butt(item, index); // 和父组件的butt对应
  }

  render(){
    const { item} = this.props;
    return(
      <button onClick={this.addCount}>{item}</button>
    )
  }
}

export default ListCounts;