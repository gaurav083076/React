import { render } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestuarantMenu";

it("Should load resturant menu component", async() => {
    await act(async() => render(<RestaurantMenu />))

});