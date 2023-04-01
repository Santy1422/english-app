
const initialState = {
    profile: [],

}
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
    case "SETPROFILE":
        return{
            ...state,
            profile: action.payload
        }
        default:
            return state;
    }
}

export default rootReducer;
