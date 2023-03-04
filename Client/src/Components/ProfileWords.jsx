import React from "react";
import { useSelector } from "react-redux";


export const ProfileWords = (props) =>{
    const profile = useSelector((state) => state.profile)

const {spanish, english, screen} = props
let mapeoCondicion = screen ? spanish : profile?.palabras?.español
const token = localStorage.getItem("accessToken");
let noScreen = "https://images.vexels.com/media/users/3/142193/isolated/preview/d5f1419f36018c19634f5501f58a1531-palabras-de-argot-comico-de-dibujos-animados.png"
  return (
    <div class="my-6">
      {profile?.palabras?.español.length && token || props
        ? mapeoCondicion?.map((ele, index) => (
            <ul key={index} className="max-w-md divide-y ">
              <li className="pb-3 sm:pb-4">  
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={screen ? screen[index] ? screen[index] : screen[0] : profile.palabras.image[index]} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black">
                      {english ? english[index] : ele}
                    </p>
                    <p className="text-sm text-black">
                      {screen ? spanish[index] : profile?.palabras?.ingles[index]}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          ))
        : 
        <ul  className="max-w-md divide-y bg-white">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={screen ? screen : null} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black">
                      Ouch!
                    </p>
                    <p className="text-sm text-black">
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