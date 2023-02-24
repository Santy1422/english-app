import React, {useState} from "react";
import { Cards } from "./Cards";
import { NewWord } from "./NewWord";
import { useStat } from "./useStat";
import { useHistory } from "react-router-dom";

export const Panel = ({location}) =>{
  const history = useHistory()  

const {profile} = useStat()    
const {state} = location
const [paginas, setPaginas] = useState(1)
const logout = () =>{
  localStorage.clear("accessToken")
  history.push("/")
}
return(
<div> 

<div class="h-screen w-full bg-white relative flex overflow-hidden">

  {/* <!-- Sidebar --> */}
  <aside class="h-full w-20 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
    {/* <!-- Profile --> */}
 <button  class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
<p> Perfil </p>  
</button>

    {/* <!-- Courses --> */}
    <div onClick={() => setPaginas(1)} class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <p> Palabras </p>  
    </div>

    {/* <!-- Theme --> */}
    <div onClick={() => setPaginas(2)} class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <p> Agregar palabra </p>  

    </div>

    {/* <!-- Configuration --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <p>Ajustes</p>  

    </div>
  </aside>

  
 
  <div class="w-full h-full flex flex-col justify-between">
    {/* <!-- Header --> */}
    <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
    {/* <!-- Informação --> */}
      <div class="flex flex-shrink-0 items-center space-x-4 text-white">
        
        {/* <!-- Texto --> */}
        <div class="flex flex-col items-end ">
          {/* <!-- Nome --> */}
          <div class="text-md font-medium ">{profile?.name}</div>
          {/* <!-- Título --> */}
          <div class="text-sm font-regular">Student</div>
        </div>
        
        <button onClick={() => logout()}>Logout</button>
      </div>
    </header>

    {/* <!-- Main --> */}
    <main class="max-w-full h-full flex relative overflow-y-hidden">
      {/* <!-- Container --> */}
      <div class="h-full w-full m-6 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll justify-center">

        {/* <!-- Container --> */}
        {paginas === 1 ?
            <Cards/>    
             : paginas === 2 ? <NewWord/> : null

    }
      </div>
    </main>
  </div>

</div>

</div>
    )
}