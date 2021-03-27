import React from 'react'
import {connect} from 'react-redux'
import AddToCart from '../services/actions/Actions'
import Home from '../components/Home'
const mapStateToProps=(state)=>{
    return({
        
    })
}
const mapDispatchToProps=(dispatch)=>{
    return({
        cardItemHandler:(data)=> dispatch(AddToCart(data))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)