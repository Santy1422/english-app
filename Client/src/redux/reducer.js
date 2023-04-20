const initialState = {
    profile: [],

    change:true
}

function rootReducer(state = initialState, action) {
switch(action.type){

case "INFOUSER":
    return{
        ...state,
        profile: action.payload
    }
    case "INFOUSER2":
        return{
            ...state,
            profile: action.payload
        }    
    case "CHANGE":
        return{
            ...state,
            change: true
        }    
        case "CLEAN":
            return{
                ...state,
                profile: []
            }    
       
        case "RELOAD":
            return{
                ...state,
                change: false
            } 
              default:
                return { ...state };
            }
          }

      
export default rootReducer;