import React from "react";
import { useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
export  const Profile = () =>{
  const profile = useSelector((state) => state.profile)
  const test = useSelector((state) => state.test)

  const token = localStorage.getItem("accessToken");

  return(
  <div>
        <img
    src={profile.imagen ?  profile.imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"}
    class="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />

<h5 class="mb-2 text-xl text-black font-medium font-bold leading-tight text-center">{!token ? "invitado" : profile?.name}</h5>

  
<hr></hr>

    <ProfileWords/>
  </div>
)
}