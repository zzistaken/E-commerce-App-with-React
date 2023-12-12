import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default class CardSummary extends Component {
  renderSummary = () => {
    return (
      <div>
        <UncontrolledDropdown className="mr-2">
          <DropdownToggle className="h-[40px]" color="dark">
            {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.cart.map((item) => (
              <DropdownItem
                key={item.product.id}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                {item.product.productName}
                <Badge className="ml-1" color="success">
                  {item.quantity}
                </Badge>
                <Badge
                  onClick={() => this.props.removeFromCart(item.product)}
                  className="ml-1"
                  color="danger"
                >
                  <MdDelete />
                </Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
              onClick={() => this.props.clearCart()}
            >
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  };

  renderEmptyCart = () => {
    return (
      <div>
        <UncontrolledDropdown className="mr-2">
          <DropdownToggle disabled className="h-[40px]" color="dark">
            <FaShoppingCart />
          </DropdownToggle>
        </UncontrolledDropdown>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
