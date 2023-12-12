import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import {
  Badge,
  Button,
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
          <DropdownToggle
            className="h-[40px]"
            color="success"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaShoppingCart className="mr-1" />
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
                <Badge className="mx-1" color="dark">
                  {item.product.unitPrice}$
                </Badge>
                <span className="font-semibold">
                  {item.product.productName}
                </span>
                <Badge className="ml-1" color="success">
                  x{item.quantity}
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
            >
              <span className="font-semibold">Total: </span>
              <span className="ml-1 text-blue-600 font-bold">
                {this.props.totalCost}$
              </span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                color="danger"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
                onClick={() => this.props.clearCart()}
              >
                Clear Cart <MdCleaningServices className="ml-1" />
              </Button>
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
          <DropdownToggle disabled className="h-[40px]">
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
