import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestuarantCard";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestuarantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
// Header
//     - Logo
//     - Nav Items
// Body
//     - Search 
//     - ResturentContainer
//         - RestaurentCart
// Footer
//     - Copyright
//     - Links
//     - Address
//     - Contact Info

//Header
// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// };

const Grocery = lazy(() => import("./components/Grocery") );

const AppLayout = () => {
    const [userName,setUserName] = useState();
    useEffect(() => {
        const data = {
            name:"Gaurav Kumar" 
        }
        setUserName(data.name);
    },[])
    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
    <Header />
    <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
);
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:<About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading Grocery</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
