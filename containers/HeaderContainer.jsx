import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
const mapStateToProps=(state)=>{
    console.log("State hn",state);

    return({
        data: state.Reducer
    })
}
const mapDispatchToProps=(dispatch)=>{
    return({
        // cardItemHandler:data=> dispatch(AddToCart(data))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)( Header)
