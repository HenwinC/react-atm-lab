import React, { Component } from 'react';
class Account extends Component {
  constructor(){
    super()
    this.inputValue = React.createRef()
    this.state = {
      balance: 0
    }
  }
  depositButton = () => {
    let value = parseInt(this.inputValue.current.value)
    if (!isNaN(value)){
      this.setState({
        balance: this.state.balance + value
      })
    }
  }
  withdrawButton = () => {
    let value = parseInt(this.inputValue.current.value)
    if (!isNaN(value)){
      this.setState({
        balance: this.state.balance - value
      })
    }
  }
  render() {
    let className = "account"
    if (this.state.balance <= 0)
      className += " zero"
    return (
      <div className={className}>
        <h2>{this.props.accountName}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" ref={this.inputValue} placeholder="enter an amount" />
        <input type="button" onClick={this.depositButton} value="Deposit" />
        <input type="button" onClick={this.withdrawButton} value="Withdraw" />
      </div>
    )
  }
}
export default Account;