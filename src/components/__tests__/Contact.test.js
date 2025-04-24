import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Grouping 
describe("Contact use test cases",() => {
    test("Should load contact us component",() => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button insided contact us component",() => {
        render(<Contact />);
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    });
    
    test("Should load button 2 text box in compinent",() => {
        render(<Contact />);
        const textbox = screen.getAllByRole("textbox")
        expect(textbox.length).toBe(2);
    });
})
// test("Should load contact us component",() => {
//     render(<Contact />);
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
// });

// test("Should load button insided contact us component",() => {
//     render(<Contact />);
//     const button = screen.getByRole("button")
//     expect(button).toBeInTheDocument();
// });

// test("Should load button 2 text box in compinent",() => {
//     render(<Contact />);
//     const textbox = screen.getAllByRole("textbox")
//     expect(textbox.length).toBe(2);
// });

