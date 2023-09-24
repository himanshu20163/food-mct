const inititaldata = {
    food_search_data:"",
}

const myReducer = (state = inititaldata,action) =>{

    switch(action.type){
        case "food_search_data":
            state = {
                ...state,
                food_search_data:action.payload,
            }
            break;
    }
    return state;
}
export default myReducer;