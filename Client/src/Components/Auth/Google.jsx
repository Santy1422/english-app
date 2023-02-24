import React, { useEffect, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import axios from "axios"
import { useStat } from "../useStat";
import { useHistory } from "react-router-dom";
export const Google = () =>{

  const history = useHistory()
const [user, setUser] = useState()

const {setProfile, profile} = useStat()
   
useEffect(()=>{
 if(localStorage.length)  history.push("/userPanel") 
},[localStorage.length])
      const login = useGoogleLogin({
        onSuccess: tokenResponse => storage(tokenResponse),
      });

      const storage = (tokenResponse) =>{
        localStorage.setItem('accessToken', tokenResponse.access_token)
        setUser(tokenResponse)
      }

      const loguut = () =>{
        googleLogout()
            localStorage.clear('accessToken')
      }

      return(

<div>
  {!profile ? (
    <button onClick={() => login()}>
      Iniciar con Google
    </button>
  ) : (
    <button onClick={() => loguut()}>
      Cerrar sesion de google
    </button>  )}
</div>
      
      )
}