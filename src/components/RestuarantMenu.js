import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Link } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const { resId } = useParams();
    // console.log(resId);
    
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(1);
    console.log(showIndex,setShowIndex);
    
        if (resInfo === null)
            return <Shimmer />;
        const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-lg">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* Category accordions */}
            {categories.map((category,index) => (
                <RestaurantCategory 
                key={category.card.card.categoryId} 
                data={category?.card?.card}
                showItems = {index === showIndex ? true:false}
                setShowIndex = {() => setShowIndex(showIndex === index ? null : index)}
                 />
            ))}
            
        </div>


    );
}

export default RestaurantMenu;