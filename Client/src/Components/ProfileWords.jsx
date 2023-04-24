import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export const ProfileWords = (props) =>{
    const profile = useSelector((state) => state.profile)

const {spanish, english, screen, paginas} = props
const location = useLocation()
let mapeoCondicion = screen ? spanish : profile?.palabras?.ingles
const token = localStorage.getItem("accessToken");
  return (
    <div class="my-6 ">
      <ul className="max-w-md divide-y ">
              <li className="pb-3 sm:pb-4">  
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
Imagen</p> 
                 </div>
                  <div className="flex-1 min-w-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
                      Español
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
                   Ingles
                  </p>
                  </div>
                  {!paginas &&
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black">
Aprendizaje
</p>
                  </div>}

                </div>
              </li>
            </ul>
            <hr></hr>
      {profile?.palabras?.español.length && token || props
        ? mapeoCondicion?.map((ele, index) => (
            <ul key={index} className="max-w-md divide-y my-5 ">
              <li className="pb-3 sm:pb-4">  
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={screen ? screen[index] ? screen[index] : screen[0] : profile.palabras.image[index]} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
                      {spanish ? spanish[index] : profile?.palabras?.español[index]}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
                    {screen ? english[index] : profile?.palabras?.ingles[index]}</p>
                  </div>
                  {paginas && <button class="text-white">X</button>}
                  {!paginas &&

                  <div className="flex-1 min-w-0">
                  <p className={!paginas &&"text-sm font-medium text-black" || "text-sm font-medium text-white"}>
                  Veces vistas: {profile?.vistas?.filter((vista) => vista.toLowerCase() === (english ? english[index] : ele)?.toLowerCase()).length}</p>
                  </div>
}
                </div>
              </li>
            </ul>
          ))
        : 
        <ul  className="max-w-md divide-y bg-gray-800">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={screen ? screen : null} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">
                      Ouch!
                    </p>
                    <p className="text-sm text-white">
                      No tienes pabras por aprender
                    </p>
                  </div>
                </div>
              </li>
            </ul>
      }
    </div>
  )
    }