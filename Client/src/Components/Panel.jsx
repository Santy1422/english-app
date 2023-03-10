import React, {useEffect, useState} from "react";
import { Cards } from "./Cards";
import { NewWord } from "./NewWord";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Profile } from "./Profile";
import { CleanUser, Reload, SetProfile } from "../redux/actions";
import  axios  from "axios";
import { useCard } from "./useCard";
import { MovilMenu } from "./MovilMenu";

export const Panel = ({location}) =>{
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const change = useSelector((state) => state.change)

  const [changeCard, setChangeCard] = useState(true)
  const [paginas, setPaginas] = useState(1)
  const history = useHistory()  
const logout = () =>{
  localStorage.clear("accessToken")
  history.push("/")
}
const {posicion, saveWords } = useCard()
const [newCard, setNewCard] = useState(true)
const [movil, setMovil] = useState(false)

useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const decifrar = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      });
      dispatch(SetProfile({ email: decifrar.data.email, name: decifrar.data.name, picture: decifrar.data.picture }));
      dispatch(Reload())

    } catch (error) {
      console.error(error);
    }

  };
  fetchData();
}, [posicion, changeCard, newCard, paginas, saveWords]);




return(
<div> 

<div class="h-screen w-full  bg-white relative flex overflow-hidden">

  {/* <!-- Sidebar --> */}
  <aside class="h-full w-full md:w-20 flex flex-col space-y-10 items-center justify-center relative hidden md:flex bg-yellow-500 text-white">
    {/* <!-- Profile --> */}
    <div onClick={() => setPaginas(0)} class="flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
<p> Perfil </p>  
</div>

    {/* <!-- Courses --> */}
    <div onClick={() => setPaginas(1)} class="flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <p> Palabras </p>  
    </div>

    {/* <!-- Theme --> */}
    <div onClick={() => setPaginas(2)} class="flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
    <p> Agregar palabra </p>  

    </div>

  </aside>

 
  <div class="w-full h-full flex flex-col justify-between">

    {/* <!-- Header --> */}
    <header class="h-16  w-full flex items-center relative justify-end px-5 space-x-10 bg-yellow-500">
    <button class=" block md:hidden  mr-20" onClick={() => setMovil(!movil)}>
  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>
    {/* <!-- Informa????o --> */}
      <div class="flex flex-shrink-0 items-center space-x-4 text-white">
        
        {/* <!-- Texto --> */}
        <div class="flex flex-col items-end ">
          {/* <!-- Nome --> */}
          <div class="text-md font-medium ">{profile?.name}</div>
          {/* <!-- T??tulo --> */}
          <div class="text-sm font-regular">Student</div>
        </div>
        
        <button class="rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white" onClick={() => logout()}>Salir</button>
      </div>
    </header>

    {/* <!-- Main --> */}
    <main class="max-w-full h-full flex relative overflow-y-hidden">
      {/* <!-- Container --> */}
      <div class="h-full w-full m-6 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll justify-center">

        {/* <!-- Container --> */}
        
  {movil ?
  <MovilMenu setPaginas={setPaginas} setMovil={setMovil} movil={movil}/>
:  paginas === 0 ? <Profile movil={movil}/>:
        paginas === 1 ?
            <Cards changeCard={changeCard} setChangeCard={setChangeCard} newCard={newCard}/>    
             : paginas === 2 ? <NewWord newCard={newCard} setNewCard={setNewCard}/> : null

    }
      </div>
    </main>
  </div>

</div>

</div>
    )
}