import React, { Component } from "react";
import Logo from "../Assets/logo.png";
import CardSummary from "../Pages/Site/CardSummary";

export default class Navigation extends Component {
  render() {
    return (
      <div className="h-[70px] w-full flex p-2 mb-2 items-center bg-white justify-between border-b border-b-slate-300">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[70px]" />
        </div>
        <div className="flex items-center">
          <CardSummary
            removeFromCart={this.props.removeFromCart}
            clearCart={this.props.clearCart}
            cart={this.props.cart}
          />
          <button className="h-10 w-16 bg-slate-800 rounded-md text-white hover:bg-slate-700 duration-200">
            Panel
          </button>
        </div>
      </div>
    );
  }
}
