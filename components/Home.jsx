import React from 'react'
const Header=(props)=>{
    console.log("me props home ka",props);
    return(
        <>
        <h1>I am Home</h1>
        <button onClick={()=>props.cardItemHandler({pice:1000,name:'i phone 11'})}>Add To Cart</button>
        </>
    )
}
export default Header