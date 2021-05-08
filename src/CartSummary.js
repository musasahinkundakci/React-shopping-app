import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart <Badge color="danger">{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((element) => (
            <DropdownItem key={element.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(element.product)}
              >
                X
              </Badge>
              -{element.product.productName}-
              <Badge color="success">{element.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink href="">Empty Cart</NavLink>
      </NavItem>
    );
  }
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
