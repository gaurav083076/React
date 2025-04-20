import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(loggedInUser);
    return (<div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
            <img className="w-56" src= {LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-8">
                <li className="px-4">Online status : {onlineStatus ? "✅" : "❌" }</li>
                <li className="px-4"> 
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4"> <Link to="/about">About Us</Link></li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4">
                    <Link to="/cart">Cart ({cartItems.length} items)</Link>
                </li>
                <button 
                className="login" 
                onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}
                >
                   {btnName}</button>
                   <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>);
};

export default Header;