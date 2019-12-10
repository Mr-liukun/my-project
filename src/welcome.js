import React, { Component } from "react";

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allCount: 0,  //总的点赞数
      addUser: '',   //添加的用户
      nowUser: '无人',//点赞的人
      users: [],    //用户集合
      count: []      //和用户集合对应，为点赞集合
    }
  }

  //点赞
  add(item, index) {

    const nC = [...this.state.count];

    nC[index] = this.state.count[index] + 1;

    this.setState({
      count: nC,
      allCount: this.state.allCount + 1,
      nowUser: item
    });

  }

  //添加用户
  addUs(e) {
    this.setState({
      users: [...this.state.users, this.state.addUser],
      count: [...this.state.count, 0],
      addUser: ''
    })
  }

  //获取输入的用户名
  inputVal(e) {
    this.setState({
      addUser: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h1>总共已经点赞 <span>{this.state.allCount}</span> 次,刚才 {this.state.nowUser} 点赞了</h1>

        {
          this.state.users.map((item, index) => {
            return <h2>{item}已经点赞 {this.state.count[index]} 次</h2>
          })
        }
        {

          this.state.users.map((item, index) => {
            return <button onClick={this.add.bind(this, item, index)}>{item}</button>
          })
        }
        <br />
        <input value={this.state.addUser} onChange={this.inputVal.bind(this)} />
        <button onClick={this.addUs.bind(this, this.state.addUser)}>添加用户</button>
      </div>
    );
  }
}

export default Welcome;
