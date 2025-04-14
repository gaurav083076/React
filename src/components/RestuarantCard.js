import { RESTAURANT_LOGO_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    return (
    <div className="restro-card">
        <img alt="res-logo" src={RESTAURANT_LOGO_URL + 
        resData.info.cloudinaryImageId.split("Image preview")[0]}
        />
        <div>
            <h4>{resData.info.name}</h4>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.locality}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.info.deliveryTime}</h4>
        </div>
    </div>);
};

export default RestaurantCard;