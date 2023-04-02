import axios from "axios";


export const InputRegister = (payload) =>{
  return{
  type: "INFOUSER2",
  payload,
}
}
export const Change = () =>{
  return{
    type: "CHANGE"
  }
}
export const Reload = () =>{
  return{
    type: "RELOAD"
  }
}
export const CleanProfile = () =>{
  return{
    type: "CLEAN"
  }
}