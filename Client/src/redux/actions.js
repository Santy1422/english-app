import axios from "axios";

export const SetProfile = ({email, name, picture, password}) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");

  try {
    const userProfile = await axios.post("/ingles", {email, name, picture, password}, {
    
    });
    dispatch({
      type: "INFOUSER",
      payload: userProfile.data,
    });
  } catch (error) {
    console.log(error);
  }
};

