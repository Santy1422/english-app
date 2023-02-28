import React from "react";
import { useSelector } from "react-redux";


export const ProfileWords = () =>{
    const profile = useSelector((state) => state.profile)


  return (
    <div class="my-6">
      {profile.palabras.español.length
        ? profile.palabras?.español?.map((ele, index) => (
            <ul key={index} className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={profile.palabras.image[index]} alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {ele}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {profile?.palabras?.ingles[index]}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          ))
        : 
        <ul  className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="https://images.vexels.com/media/users/3/142193/isolated/preview/d5f1419f36018c19634f5501f58a1531-palabras-de-argot-comico-de-dibujos-animados.png" alt="Neil image" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Ouch!
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
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