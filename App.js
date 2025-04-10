// const heading = React.createElement("h1",{id:"heading"},"React using CDN services");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",{id:"heading"},"React learning");
// const jsxheading = <h1 className="heading" tabIndex="5">React using JSX</h1><
const Title = () => (
     <h1 className="head" tabIndex="5">
        React using JSX
        </h1>
);
const HeadingComponent = () => (
    <div id="container">
    <Title />
     <h1 className="heading">React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(jsxheading);
// const parent = React.createElement("h1",{id:"parent"},[
//     React.createElement("div",{key:"child1"},"I am in h1-tag"),
//     React.createElement("div",{key:"child2"},"I am in h2-tag")
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);