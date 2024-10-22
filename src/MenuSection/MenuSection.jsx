import { useState } from "react"
import Header from "../HomeSection/Header"
import "./menusection.css"
import { appetizers, desert, maincourse } from "../assets/assets";

const MenuSection = ()=>{
    const[newClass,setNewClass] = useState(false);


    return(
        <>
        <Header />
        <div className="header">
            <div className="search-part">
                <input onClick={()=>setNewClass(true)}  style={{width:newClass?'30vw':'20vw', border:newClass?'2px solid #061E5C':''}} type="text" name="search" placeholder="Search..."/>
                <i className="fa-solid fa-magnifying-glass" ></i>
            </div>
        </div>
        <div className="items">
            <div className="appetizer">
                <div className="name">Appetizers🥗</div>
                <div className="foodItems">
                    {appetizers.map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mainCourse">
                <div className="name">Main Course🍕</div>
                <div className="foodItems">
                    {maincourse.map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="desert">
                <div className="name">Desert🍰</div>
                <div className="foodItems">
                    {desert.map((item,index)=>{
                        return(
                            <div key={index} className='appetizer-items'>
                                <img src={item.item_image} alt="" />
                                <p>{item.item_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default MenuSection