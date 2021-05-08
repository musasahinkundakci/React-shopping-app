import React, { Component } from "react";
import CartList from "./CartList";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import NotFound from "./NotFound";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  productInfo = {
    title: "Product List",
  };
  categoryInfo = { title: "Category List" };
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((c) => c.product.id === product.id);
    console.log(addedItem);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added to Cart!", 2);
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " Removed from Cart!", 2);
  };
  removeAll = () => {
    this.setState({ cart: [] });
  };
  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    console.log(category);
    this.getProducts(category.id);
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ products: data }));
    } else {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => this.setState({ products: data }));
      this.setState({ currentCategory: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAll={this.removeAll}
          />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
                getProducts={this.getProducts}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      info={this.productInfo}
                      currentCategory={this.state.currentCategory}
                      addToCart={this.addToCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                      removeAll={this.removeAll}
                    />
                  )}
                />
                <Route component={FormDemo1} path="/form1" />
                <Route component={FormDemo2} path="/form2" />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
