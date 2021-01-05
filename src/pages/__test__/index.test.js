import * as actions from "../../actions";
import * as reactRedux from 'react-redux';
import { shallow, configure, mount } from "enzyme";
import CartItem from "../../components/CartItem";
import { fireEvent, render } from "@testing-library/react";
import App from "../../App";
import store from "../../store/store"
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import ItemListContainer from "../ItemListContainer"
import { initialState } from "../../reducers/initialState";
import ShoppingCart from "../ShoppingCart";
configure({ adapter: new Adapter() });

describe("Shopping Cart components", () => {
  test('ShoppingCart에 cartItems가 렌더되어야합니다.', () => {
    const { queryByText } = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)

    const cartItemElement1 = queryByText("박진영 쿠션")
    const cartItemElement2 = queryByText("2020년 달력")
    const cartItemElement3 = queryByText("칼라 립스틱")
    const cartItemElement4 = queryByText("개구리 안대")

    expect(cartItemElement1).toBeInTheDocument()
    expect(cartItemElement2).toBeInTheDocument()
    expect(cartItemElement3).toBeInTheDocument()
    expect(cartItemElement4).not.toBeInTheDocument()
  })
  test('REMOVE_FROM_CART 액션에 따라 ShoppingCart가 렌더되어야 합니다.', () => {
    const { queryByText } = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)


  })
  test('SET_QUANTITY 액션에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const { queryByText } = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)


  })
  test('Checkbox의 상태에 따라 OrderSummary가 렌더되어야 합니다.', () => {
    const { queryByText } = render(
      <reactRedux.Provider store={store}>
        <ShoppingCart />
      </reactRedux.Provider>)


  })
});
