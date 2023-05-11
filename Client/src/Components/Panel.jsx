import React, {useEffect, useState} from "react";
import { Cards } from "./Card/Cards";
import { NewWord } from "./NewWord";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Profile } from "./Profile";
import { CleanProfile } from "../redux/actions";
import  axios  from "axios";
import { Menu } from "./Menu";
import { NewPost } from "./NewPost";

export const Panel = () =>{
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const [changeCard, setChangeCard] = useState(true)
  const [paginas, setPaginas] = useState(1)
  const history = useHistory()  
console.log(profile)
  const logout = () => {
    localStorage.clear("accessToken");
    const tokenUser = localStorage.getItem("accessToken");
    if(tokenUser){
    axios.post("/ingles/logout", {}, {
      headers: {
        "Authorization": `Bearer ${tokenUser}`
      }
    })
    .then((success) => {
      localStorage.clear("accessToken");
      dispatch(CleanProfile())

      history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
  }else{
    localStorage.clear("tokenGoogle");
    dispatch(CleanProfile())

      history.push("/");

  }

  };

const [newCard, setNewCard] = useState(true)
const [movil, setMovil] = useState(false)
const [sidebarOpen, setSidebarOpen] = useState(false);

function handleSidebarToggle() {
  setSidebarOpen(!sidebarOpen);
}

return(
  <div class="flex h-screen bg-gray-100">

    {/* <!-- sidebar --> */}
    <div class="hidden md:flex flex-col w-64 bg-gray-800">
        <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">Menu</span>
        </div>
<Menu setPaginas={setPaginas}/>
        </div>

    {/* <!-- Main content --> */}
    <div class="flex flex-col flex-1 overflow-y-auto">
        <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div class="flex items-center px-4">
                <button class="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden" onClick={() => handleSidebarToggle()} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                
            </div>
            
            <div class="flex items-center pr-4">
            <button onClick={() => logout()} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Logout</button>

            
            </div>
        </div>
        {sidebarOpen &&
                    <div class="flex h-screen bg-gray-100">

<Menu setPaginas={setPaginas} setMovil={setMovil} handleSidebarToggle={handleSidebarToggle} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
                    </div>
}
        <div class="p-4">
        {
  movil && !sidebarOpen ? (
    <Menu
      setPaginas={setPaginas}
      setMovil={setMovil}
      handleSidebarToggle={handleSidebarToggle}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
    />
  ) : paginas === 0 && !sidebarOpen ? (
    <Profile movil={movil} />
  ) : paginas === 1 && !sidebarOpen ? (
    <Cards
      changeCard={changeCard}
      setChangeCard={setChangeCard}
      newCard={newCard}
      setPaginas={setPaginas}
    />
  ) : paginas === 2 ? (
    !sidebarOpen && (
      <NewWord newCard={newCard} setNewCard={setNewCard} paginas={paginas} />
    )
  ) : paginas === 3 && !sidebarOpen ? (
    <NewPost paginas={paginas} />
  ) : null
}
          

        </div>
    
</div>
</div>

    )
}