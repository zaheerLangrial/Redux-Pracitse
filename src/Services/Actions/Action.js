import { ADD_TO_CART, REOMOVE_TO_CART } from "../Constands";


export  const addToCart =  (data)  => {
    console.log('ACtion' , data)
    return {
        type : ADD_TO_CART,
        data : data
    }
}

export const removeToCart = () => {
    console.log('Action')
    return {
        type : REOMOVE_TO_CART,
    }
}