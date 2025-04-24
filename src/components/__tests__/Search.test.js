import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { glob } from "fs";
import JSDOMEnvironment from "jest-environment-jsdom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
}
);
it("Should render a body component with Search button",async() => {
    await act(async () =>
    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));
     const cardsBefore = screen.getAllByTestId("resCard");
     expect(cardsBefore.length).toBe(8);
     const serachBtn = screen.getByRole("button",{name: "Search"})
     const searchInput = screen.getByTestId("searchInput");
     fireEvent.change(searchInput,{target:{value:"pizza"}});
     fireEvent.click(serachBtn);
     const cards = screen.getAllByTestId("resCard");
     expect(cards.length).toBe(2);
     expect(serachBtn).toBeInTheDocument();
});

it("Should filter top rated resturant",async() => {
    await act(async () =>
    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));
     const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restaurants"})
     fireEvent.change(topRatedBtn,{});
     fireEvent.click(topRatedBtn);
     const cards = screen.getAllByTestId("resCard");
     expect(cards.length).toBe(1);
});