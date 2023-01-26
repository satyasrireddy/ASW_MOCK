// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
   
    switch(action.type){
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                myShoppingCart:[action.payload, ...state.myShoppingCart],
            };
            case "REMOVE_ITEM_FROM_CART":
                return{
                    ...state,
                    myShoppingCart: state.myShoppingCart.filter(
                        (myShoppingCart) => myShoppingCart.id !== action.payload
                    )

                };
        default:
            return state;
    }
};