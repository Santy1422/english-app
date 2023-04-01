import axios from "axios";
let url = "http://localhost:8080/"


export const HandleRegister = (payload) => {
        return {
            type: "SETPROFILE",
            payload,
    
}
}