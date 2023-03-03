import React from "react";
import { Link } from "react-router-dom";
import { Google } from "./Auth/Google";

export const Home = () =>{



    return(

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
  <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md h-96">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 my-10">Ingresa con tu cuenta</div>
    <p class=" text-gray-800 my-10">Por favor inicia sesion con Google para continuar</p>
    <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200" >
      
      <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
      <Google/>
    </button>
   <Link to="/userPanel"> <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200" >
      
      <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
     Ingresar como invitado
    </button></Link>

    </div>
  </div>
    )
}