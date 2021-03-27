const initialState = {
    cardData: []
}
export default function cardItems(state=initialState.cardData, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }
}
