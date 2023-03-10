import React from "react";
import { useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
export  const Profile = () =>{
  const profile = useSelector((state) => state.profile)
  const test = useSelector((state) => state.test)

  const token = localStorage.getItem("accessToken");
let photo = profile.picture ? profile.picture.split('=')[0] : "https://img-19.ccm.net/4KM3uefjhLzfImuIf3ZtMyNGmes=/450x/smart/45d7788dc1474c02bd6ff6224672765a/ccmcms-esccm/34935311.png"
  return(
  <div>
        <img
    src={photo}
    class="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />

<h5 class="mb-2 text-xl text-black font-medium font-bold leading-tight text-center">{!token ? "invitado" : profile?.name}</h5>

  
<hr></hr>

    <ProfileWords/>
  </div>
)
}