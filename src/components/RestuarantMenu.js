import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constant";
import { Link } from "react-router";
const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL + resId
            );
        console.log (MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        };
        if (resInfo === null)
            return <Shimmer />;
        const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(items => <li key={items.card.info.id}>{items.card.info.name}</li>)}
            </ul>
        </div>

    );
}

export default RestaurantMenu;