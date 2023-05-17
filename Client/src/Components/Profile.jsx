import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
export  const Profile = () =>{
  const profile = useSelector((state) => state.profile)

  const token = localStorage.getItem("accessToken");
let photo =  "https://img-19.ccm.net/4KM3uefjhLzfImuIf3ZtMyNGmes=/450x/smart/45d7788dc1474c02bd6ff6224672765a/ccmcms-esccm/34935311.png"
  

return(
  <div>
        <img
    src={photo}
    class="mx-auto mb-4 w-32 rounded-lg"
    alt="Avatar" />

<h5 class="mb-2 text-xl text-black font-medium font-bold leading-tight text-center">{!token ? "invitado" : profile?.name}</h5>

  
<hr></hr>
<div class="border-b border-gray-200 dark:border-gray-700 flex justify-center">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="mr-2">
        <a href="#" class="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Cards
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Articles
            </a>
        </li>

    </ul>
</div>

<div class="flex justify-center">

    <ProfileWords/>
  </div>

  </div>
)
}