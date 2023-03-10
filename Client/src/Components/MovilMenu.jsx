import React from "react"

export const MovilMenu = ({setPaginas, setMovil, movil}) =>{

const aux = (number) =>{
setPaginas(number)
setMovil(!movil)
}

    return(
<div >
  {/* <!-- Sidebar --> */}
  <aside class={movil ? "h-screen w-full bg-white" : "h-full w-full md:w-20 flex flex-col space-y-10 items-center justify-center relative hidden md:flex bg-yellow-500 text-white"} >
    {/* <!-- Profile --> */}
    <div onClick={() => aux(0)} class="my-10 flex items-center justify-center text-black border-2 rounded-lg bg-white border-yellow-600 focus:bg-black">
<p> Perfil </p>  
</div>

    {/* <!-- Courses --> */}
    <div onClick={() => aux(1)  } class="my-10 flex items-center justify-center text-black  border-2 rounded-lg border-yellow-600">
    <p> Palabras </p>  
    </div>

    {/* <!-- Theme --> */}
    <div onClick={() => aux(2)  } class="my-10 flex items-center justify-center text-black  border-2 rounded-lg border-yellow-600">
    <p> Agregar palabra </p>  

    </div>

  </aside>
  </div>
    )
}

