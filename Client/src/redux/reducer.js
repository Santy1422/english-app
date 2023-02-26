
const initialState = {
    profile: [],
    test : "asd"
}

function rootReducer(state = initialState, action) {
switch(action.type){

case "INFOUSER":
    return{
        ...state,
        profile: action.payload
    }
              default:
                return { ...state };
            }
          }

      
export default rootReducer;