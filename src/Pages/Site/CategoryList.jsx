import React, { Component } from "react";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3005/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h5 className="mb-[12px]">{this.props.title}</h5>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              className="overflow-hidden hover:cursor-pointer"
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          {this.props.currentCategory !== null && (
            <Button
              onClick={() => this.props.clearCategoryFilter()}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 0 0.5rem 0.5rem",
              }}
              color="danger"
            >
              Clear Filter <FaFilterCircleXmark className="ml-1" />
            </Button>
          )}
        </ListGroup>
      </div>
    );
  }
}
