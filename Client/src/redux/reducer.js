
const initialState = {
    usuario: [],
    palabrasEsp: [],
    palabrasEng: [],
    test: "asd"
}

function rootReducer(state = initialState, action) {
switch(action.type){

case "ADDUSER":
    return{
        ...state,
        usuario: action.payload
    }
              default:
                return { ...state };
            }
          }

      
export default rootReducer;