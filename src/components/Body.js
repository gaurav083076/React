import RestaurantCard from "./RestuarantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [detail,setDetail] = useState([]);
    const [filteredDetail,setFilteredDetail] = useState([]);
    useEffect(() => {fetchData()},[]);
    const [searchText,setSearchText] = useState("");
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // optional chaining
        setDetail(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredDetail(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return <h1>You are offline.</h1>;

    //condtional rendering 
    if (detail.length === 0)
            return <Shimmer />;
    return (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) =>   {
                    setSearchText(e.target.value)
                }}/>
                <button onClick= {() => {
                    const filteredRes = detail.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredDetail(filteredRes);
                }}>Search</button>
            </div>
            <button 
            className="filter-btn" 
            onClick = {() => {
                const filteredData = detail.filter(
                (res) => res.info.avgRating > 4.5
            );
            setFilteredDetail(filteredData);
            }}
            >Top Rated Restaurants</button>
        </div>
        <div className="restro-container">
            {
                filteredDetail.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                  <RestaurantCard resData = {restaurant}/>
                </Link>
               
            )
            )
            }
        </div>
    </div>);
};

export default Body;