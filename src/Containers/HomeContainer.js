import Home from "../Components/Home";
import { addToCart , removeToCart } from "../Services/Actions/Action";
import { connect } from "react-redux";


const mapStateToEnd = state => ({
    data : state.addItem
})
const mapDispathtoEnd = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect (mapStateToEnd , mapDispathtoEnd)(Home)