import React, { Component } from "react";
import { Button } from "reactstrap";
import { IoIosAddCircle } from "react-icons/io";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.currentCategory === null ? (
          <h5>
            {this.props.title} ({this.props.products.length})
          </h5>
        ) : (
          <h5>
            {this.props.title}/{this.props.currentCategory} (
            {this.props.products.length})
          </h5>
        )}
        <div className="flex flex-wrap">
          {this.props.products.map((product) => (
            <div
              key={product.id}
              className="w-[260px] p-2 border border-slate-400 rounded-md m-1"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-[156px] object-contain mb-2"
              />
              <h5>{product.productName}</h5>
              <div className="text-slate-500">
                <h6>{product.quantityPerUnit}</h6>
                <h6>
                  Price:
                  <span className="text-slate-800">
                    {product.unitPrice}
                    <span className=" text-green-700">$</span>
                  </span>
                </h6>
              </div>
              <Button
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => this.props.addToCart(product)}
                color="primary"
              >
                Add to Cart <IoIosAddCircle className="text-xl ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
