import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }
  render() {
    return (
      <div>
        this is home~ <br/>ddd
        当前计数： {this.state.count} <br/>
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    )
  }
}