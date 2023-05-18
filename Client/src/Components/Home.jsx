import React, { useEffect, useLayoutEffect } from "react";
import {  useLogin } from "./CustomHooks/useLogin";
import image from "../image.png"
export const Home = (props) =>{


const {changeInput, handleSubmit, user, register, setRegister, incorrecto, setUser} = useLogin(props.setPaginas)
const invitado = () =>{
  setUser({
    ...user,
    email: "invitado@gmail.com",
    password: "123456"
  })
}

useEffect(()=> {

})
    return(

<div class="min-h-screen bg-gray-800 flex flex-col justify-center sm:py-12">
<div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
  <div class="bg-gray-500 shadow w-full rounded-lg divide-y divide-gray-200 py-6">
 <center> <img src={image}  style={{ maxWidth: '100%' }}/></center>
    {incorrecto ? 
  <div className="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>¡Ups!, Email o contraseña incorrecto.</span>
  </div>

</div>
: null}
    <div class="px-5 py-8">
    {register ?
      <><label class="font-semibold text-sm text-white pb-1 block">Nombre</label><input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={user.name} name="name" onChange={(e) => changeInput(e)} /></>
      : 
      null
      }

      <label class="font-semibold text-sm text-white pb-1 block">Correo electronico</label>
      <input type="email"  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={user.email} name="email" onChange={(e) => changeInput(e)}/>
      <label class="font-semibold text-sm text-white pb-1 block">Contraseña</label>
      <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  value={user.password} name="password" onChange={(e) => changeInput(e)}/>

     
      {!register ?
      <button onClick={() => handleSubmit()} type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          <span class="inline-block mr-2">Iniciar sesion</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          
      </button>
      :
            <button onClick={() => handleSubmit()} type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Crear cuenta</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      }
    </div>
    <div class="sm:text-center ">
          <button onClick={() => invitado()} class="transition duration -200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
        Ingresa como invitado
          </button>
  
        </div>
      <div class="py-5">
     
        {!register ? 
        <div class="text-center sm:text-right whitespace-nowrap">
          <button onClick={() => setRegister(true)} class="transition duration -200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
        ¿Aun no estas registrado?
          </button>
           
  
        </div>
        : 
        <div class="text-center sm:text-right whitespace-nowrap">
        <button onClick={() => setRegister(false)} class="transition duration -200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
      Iniciar Sesion
        </button>

      </div>

        }
          
      </div>
  </div>
  <div class="py-5">
      <div class="grid grid-cols-2 gap-1">
        <div class="text-center sm:text-left whitespace-nowrap">
        
        </div>
      </div>
    </div>
</div>
</div>
    )
}