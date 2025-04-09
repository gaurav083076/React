// const heading = React.createElement("h1",{id:"heading"},"React using CDN services");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("h1",{id:"parent"},[
    React.createElement("div",{id:""},"I am an h1 tag"),
    React.createElement("div",{id:""},"I am an h2 tag")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);