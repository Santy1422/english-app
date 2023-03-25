import React, { useEffect, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { useHistory } from "react-router-dom";
export const Google = () =>{

  const history = useHistory()
const [user, setUser] = useState()

// const {setProfile, profile} = useStat()
const profile = useSelector((state) => state.profile)

useEffect(()=>{
 if(localStorage.length)  history.push("/userPanel") 
},[localStorage.length])
      const login = useGoogleLogin({
        onSuccess: tokenResponse => storage(tokenResponse),
      });

      const storage = (tokenResponse) =>{
        localStorage.setItem('tokenGoogle', tokenResponse.access_token)
        setUser(tokenResponse)
      }

      const loguut = () =>{
        googleLogout()
            localStorage.clear('tokenGoogle')

      }

      return(

<div>
  {!profile.length ? (
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