import React, { Component } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";

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
        <ListGroup>
          <ListGroupItemHeading>{this.props.title}</ListGroupItemHeading>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              className="overflow-hidden"
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          {this.props.currentCategory !== null && (
            <Button
              onClick={() => this.props.clearCategoryFilter()}
              style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
              color="danger"
            >
              Clear Filter
            </Button>
          )}
        </ListGroup>
      </div>
    );
  }
}
