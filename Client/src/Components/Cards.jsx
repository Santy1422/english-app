import React, { useEffect } from "react";
import { useCard } from "./useCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetProfile } from "../redux/actions";

export const Cards = ({setChangeCard, changeCard, newCard}) =>{

  const {posicion, español, setEspañol, next, prev, palabraEspañol, palabraIngles, deleteWord, leer} = useCard(setChangeCard, changeCard)

    const profile = useSelector((state) => state.profile)
const dispatch = useDispatch()
      useEffect(() =>{
        leer()
      }, [posicion])



    return(
       
        <><div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">

            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                        <div class="relative">
                            <img src={profile?.palabras?.image[posicion] ? profile?.palabras?.image[posicion] : null} class="shadow-xl rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                        </div>
                        </div>
                    <div class="w-full text-center mt-20">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length + profile?.aprendidas?.ingles.length : 0}</span>
                                <span class="text-sm text-slate-400">Palabras</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.aprendidas?.ingles.length ? profile?.aprendidas?.ingles.length : 0}</span>
                                <span class="text-sm text-slate-400">Aprendidas</span>
                            </div>

                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length : 0}</span>
                                <span class="text-sm text-slate-400">Estudiando</span>
                            </div>
                    </div>
                </div>
                <div class="text-center mt-2">
{palabraEspañol || palabraIngles ? 
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mt-16">{ español ? palabraEspañol : palabraIngles}</h3>
        :
        <h3 class="text-2xl text-slate-700 font-bold leading-normal mt-16">¡Ups no tienes palabras para aprender!</h3>

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

<div class="container py-10 px-10 mx-0 min-w-full flex flex-row">
  
        <button class="btn btn-primary sm:mx md:mx-20" onClick={() => prev()}>Anterior</button>
        <button class="btn btn-primary sm:mx md:mx-20" onClick={() => next()}>Siguiente</button>
      </div>   
                        </div>
                    </div>
                </div>
            </div>
        
        </div>         </>

    )
}