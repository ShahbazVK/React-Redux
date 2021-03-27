import React from 'react'
const AddToCart=(data)=>{
    return(
        {
        type: "ADD_TO_CART",
        data: data
    }
    )
}
export default AddToCart;
