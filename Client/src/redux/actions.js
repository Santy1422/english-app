import axios from "axios";

export const SetProfile = ({email, name, picture, password}) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");
  const tokenGoogle = localStorage.getItem("tokenGoogle");

  try {
    const userProfile = await axios.post("/ingles/google", {email, password, name, picture, password}, 
    {
    });
    localStorage.setItem("accessToken", userProfile?.data?.token)
    dispatch({
      type: "INFOUSER",
      payload: userProfile.data,
    });
  }

  catch (error) {
    console.log(error);
  }
}

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