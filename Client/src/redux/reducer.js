import palabras from "../Components/palabras.json"
const initialState = {
    profile: [],
    test : [
        palabras ={
            español: palabras.espanol,
            ingles: palabras.ingles

        },
    ]
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