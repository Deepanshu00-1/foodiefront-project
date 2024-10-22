import { useContext, useState } from "react"
import { countContext } from "../context/count";
import { itemAddedContext } from "../context/addedItemContext";
 
export let items = [];

const FoodCard =({Img, foodName, foodInfo, price, priceAmount})=>{

    let value = useContext(countContext);

    let cart = useContext(itemAddedContext);
    items = cart.cartItems;

    const [click, setClick] = useState(false);

    const changeColor =()=>{
        setClick(!click)
    }
    const addItemBtn = ()=>{
        value.setCount(value.count+1);

        let addedItem = {
            Img,
            foodName,
            foodInfo,
            price,
            priceAmount
        }
        items[value.count] = addedItem
        console.log(cart.cartItems)

    }

    return(
        <>
        <div className="card">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="info">
                <h1>{foodName}</h1>
                <a href="">
                    <p>{foodInfo}</p>
                </a>
            </div>
            <div className="access">
                <div className="like">
                    <div className="price">{price}</div>
                    <i className="ri-heart-fill" onClick ={changeColor} style = {{color: click ? 'crimson':'hsla(0, 0%, 59%, 0.897)'}}></i>
                </div>
                <button onClick={addItemBtn} style={{ transition: '0.2s ease'}}>Add To Cart</button>
            </div>
        </div>
        </>
    )
}
export default FoodCard