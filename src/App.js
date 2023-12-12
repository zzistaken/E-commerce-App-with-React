import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Navigation from "./Components/Navigation";
import CategoryList from "./Pages/Site/CategoryList";
import ProductList from "./Pages/Site/ProductList";
import { ToastContainer, toast } from "react-toastify";

export default class App extends Component {
  state = {
    products: [],
    currentCategory: null,
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (id) => {
    let url = "http://localhost:3005/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.log(err));
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  clearCategoryFilter = () => {
    this.setState({ currentCategory: null });
    this.getProducts();
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    const addedProduct = newCart.find((c) => c.product.id === product.id);
    if (addedProduct) {
      addedProduct.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    toast.success(product.productName + " added to cart!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    toast.error(product.productName + " removed from cart!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  clearCart = () => {
    this.setState({ cart: [] });
    toast.error("Cart cleared!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  render() {
    let InfoCategoryList = { title: "Categories" };
    let InfoProductList = { title: "Products" };

    return (
      <div className="App">
        <ToastContainer />
        <Navigation
          removeFromCart={this.removeFromCart}
          clearCart={this.clearCart}
          cart={this.state.cart}
        />
        <Container fluid="fluid">
          <Row>
            <Col xs="3">
              <CategoryList
                clearCategoryFilter={this.clearCategoryFilter}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={InfoCategoryList.title}
              />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                title={InfoProductList.title}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
