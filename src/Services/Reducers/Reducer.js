import { ADD_TO_CART, REOMOVE_TO_CART } from "../Constands";

const initialState = {
    cardData : []
}

export default function addItem (state = [] , action) {
    switch (action.type) {
        case ADD_TO_CART : 
        console.log('reducer' , action)
        return [
            ...state,
            {cardData : action.data}
        ] 
        case REOMOVE_TO_CART : 
        console.log('reducer' , action)
        state.pop();
        return [
            ...state,
        ]
        default :
        return state
    }
}
