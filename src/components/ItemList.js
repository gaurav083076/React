import { useDispatch } from "react-redux";
import { RESTAURANT_LOGO_URL } from "../utils/constant";
import { addItem } from "../utils/CartSlice";
const ItemList = ({ items }) => {
    // console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        console.log("Dispatcher",item);
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className=" w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>{" "}-₹{" "}{item.card.info.price ? item.card.info.price : item.card.info.defaultPrice /100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-white shadow-lg" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                    <img src={RESTAURANT_LOGO_URL + item.card.info.imageId}></img>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;