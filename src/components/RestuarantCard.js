import { RESTAURANT_LOGO_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    return (
    <div data-testid="resCard" className="restro-card m-4 p-4  w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg" alt="res-logo" src={RESTAURANT_LOGO_URL + 
        resData.info.cloudinaryImageId.split("Image preview")[0]}
        />
        <div>
            <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.avgRating} ⭐️</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.info.deliveryTime}</h4>
        </div>
    </div>);
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;