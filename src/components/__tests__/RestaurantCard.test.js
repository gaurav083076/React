import { fireEvent, render,screen } from "@testing-library/react";
import RestaurantMenu from "../RestuarantMenu";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_MENU_DATA from "../mocks/mockResCard.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_MENU_DATA);
        }
    });
}
);

it("should render Restaurant Card component with data", async () => {
        await act(async () => render(
        <Provider store={appStore}>
         <RestaurantMenu />
        </Provider>));
        const aa = screen.getByText("Veg Pizza (14)");
        fireEvent.click(aa);
});