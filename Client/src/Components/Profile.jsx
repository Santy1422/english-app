import React from "react";
import { useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
export  const Profile = () =>{
  const profile = useSelector((state) => state.profile)

return(
  <div>
    <div class="text-center">
  <img
    src={profile.imagen ?  profile.imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"}
    class="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />
  <h5 class="mb-2 text-xl font-medium leading-tight">{profile?.name}</h5>
  <p class="text-neutral-500 dark:text-neutral-400">{profile?.palabras?.español?.length} palabras por aprender</p>
</div>

<h5 class="mb-2 text-xl font-medium leading-tight my-5">Palabras aprendiendo</h5>
<hr></hr>

    <ProfileWords/>
  </div>
)
}