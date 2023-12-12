import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.currentCategory === null ? (
          <h5>{this.props.title}</h5>
        ) : (
          <h5>
            {this.props.title}/{this.props.currentCategory}
          </h5>
        )}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.props.addToCart(product)}
                  color="primary">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
