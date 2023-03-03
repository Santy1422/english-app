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
<h5 class="mb-2 text-xl text-black font-medium leading-tight text-center">{!token ? "invitado" : profile?.name}</h5>
    <div class="flex flex-row space-x-4 flex-center">
    <div class="pt-6 text-center bg-white rounded">
          <h4 class="mb-2 text-xs text-gray-500">Aprendiendo</h4>
          <p class="mb-1 text-4xl font-bold">{!token ? 0 :profile.palabras.español.length}</p>
        </div>
          <div class="pt-6 text-center bg-white rounded">
          <h4 class="mb-2 text-xs text-gray-500">Aprendidas</h4>
          <p class="mb-1 text-4xl font-bold">{!token ? 0 :profile.aprendidas.español.length < 10 ? "0" + profile.aprendidas.español.length : profile.aprendidas.español.length }   </p>
        </div> 
  
  <div> 
  </div>
</div>

<hr></hr>

    <ProfileWords/>
  </div>
)
}