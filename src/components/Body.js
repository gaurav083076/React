import RestaurantCard from "./RestuarantCard";
import RestaurantData from "../utils/mockData";
import { useState,useEffect } from "react";
const Body = () => {
    const [detail,setDetail] = useState([]);
    useEffect(() => {fetchData();},[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setDetail(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return (
    <div className="body">
        <div className="filter">
            <button 
            className="filter-btn" 
            onClick = {() => {
                const filteredData = detail.filter(
                (res) => res.info.avgRating > 4.5
            );
            setDetail(filteredData);
            }}
            >
            Top Rated Restaurants</button>
        </div>
        <div className="restro-container">
            {
                detail.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
            )
            )
            }
        </div>
    </div>);
};

export default Body;