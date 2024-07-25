import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../components/mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should check if screen is rendered or not and cart items are 0", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Desserts (14)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
}),
  it("Should add 1st item to the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  }),
  it("Should add 2nd item to the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  });

it("Should have 2 items in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getAllByTestId("foodItems").length).toBe(51);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(49);

  expect(
    screen.getByText("Cart is Empty. Add items to the cart")
  ).toBeInTheDocument();
});
