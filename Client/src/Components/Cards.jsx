import React, { useEffect } from "react";
import { useCard } from "./useCard";
import {  useSelector } from "react-redux";

import 'reactjs-popup/dist/index.css';

export const Cards = ({setChangeCard, changeCard, newCard}) =>{

  const {posicion, español, setEspañol, next, palabraEspañol, palabraIngles, deleteWord, leer, check, registrar, setRegistrar,sendResults, vistas, saveWords, setSaveWords} = useCard(setChangeCard, changeCard)

    const profile = useSelector((state) => state.profile)
    useEffect(() =>{
        leer()
        if(saveWords) setRegistrar([...registrar, palabraIngles])

      }, [posicion])

      const token = localStorage.getItem("accessToken");

    return(
       
        <><div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-yellow-500 w-full mb-6 shadow-lg rounded-xl mt-20">

            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                        <div class="relative">
                            <img src={profile?.palabras?.image[posicion] ? profile?.palabras?.image[posicion] :   null} class="shadow-xl rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 min-w-[150px] max-w-[150px]" />
                        </div>
                        </div>
                    <div class="w-full text-center mt-20">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-black">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length + profile?.aprendidas?.ingles.length : 0}</span>
                                <span class="text-sm text-white">Palabras</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-black">{profile?.aprendidas?.ingles.length ? profile?.aprendidas?.ingles.length : 0}</span>
                                <span class="text-sm text-white">Aprendidas</span>
                            </div>

                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-black">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length : 0}</span>
                                <span class="text-sm text-white">Estudiando</span>
                            </div>
                    </div>
                </div>

                <div class="text-center mt-2">
{palabraEspañol || palabraIngles ? 
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mt-16">{ español ? palabraEspañol : palabraIngles}</h3>
        :
        <h3 class="text-2xl text-white font-bold leading-normal mt-16">¡Ups no tienes palabras para aprender!</h3>

        }

                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-betwen">
                        <div class="w-full px-4">
<p></p>

{!español ? 
                        <button onClick={() =>setEspañol(!español)}
    type="button"
    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
 Ver en español
  </button>    
: 

<button onClick={() =>setEspañol(!español)}
    type="button"
    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
 Ver en ingles
  </button>   
}           
<button onClick={() =>deleteWord()}
    type="button"
    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
        Ya aprendi esta palabra
  </button>        

<div class="container py-10 px-10 mx-0 min-w-full ">

        <button onClick={() => next()} type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={() => next()} type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
    {token && vistas?.length > 0?
                        <ul class="steps py-3">
  <li class={vistas?.length >= 1 ? "step step-yellow-500 text-white" : "step text-black"}>vista</li>
  <li class=  {vistas?.length > 1 ? "step step-yellow-500 text-white" : "text-black step"}>vistas</li>
  <li class=  {vistas?.length > 2 ? "step step-yellow-500 text-white" : " text-black step"}>vistas</li>
  <li class=  {vistas?.length > 3 ? "step step-yellow-500 text-white" : " text-black step"}>¡Palabra aprendida!</li>
</ul>
: null 
}
{!saveWords  && token ? 
<button class="btn btn-primary bg-white sm:mx md:mx-20 text-black" onClick={() => setSaveWords(true)}>Comenzar a estudiar</button>
: token ?
<button class="btn btn-primary bg-white sm:mx md:mx-20 text-black" onClick={() => sendResults()}>Guardar resultados</button>
: null
}

      </div>   


                        </div>

                    </div>
                </div>
            </div>
        
        </div>        <div>

    </div>          </>

    )
}