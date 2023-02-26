import axios from "axios";

export const SetProfile = ({email, name, picture}) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");

  try {
    const userProfile = await axios.post("/ingles", {email, name, picture}, {
    
    });

    dispatch({
      type: "INFOUSER",
      payload: userProfile.data,
    });
  } catch (error) {
    console.log(error);
  }
};