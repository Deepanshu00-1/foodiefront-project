import { NavLink } from "react-router-dom";
import { logout } from "../config/firebase";
import "./css/header.css"
import { countContext } from "../context/count";
import { useContext } from "react";

const Header = ()=>{
    let value = useContext(countContext);

    return(
        <>
        <header>
            <div className="logo">
                <NavLink to ="/home">
                <img src="../../src/assets/restaurantLogo.png" alt="" /></NavLink>
            </div>
            <div className="nav">
                <h3>
                    <NavLink to='/home'>Home</NavLink>
                </h3>
                <h3>
                    <NavLink to='/menu'>Menu</NavLink>
                </h3>
                <NavLink to='/cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cartNotification">{value.count}</div>
                </NavLink>
            </div>
            <div className="search">
                {/* <div className="search-part">
                    <input type="text" name="search" placeholder="Search..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div> */}
                <button onClick={logout}>Logout</button>
            </div>
        </header>
        </>
    )
}
export default Header;