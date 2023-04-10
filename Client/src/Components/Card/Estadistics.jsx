import React from "react";

export const Estadistics = ({profile, posicion, token, vistas}) =>{

    return(
        <div>
        <div class="flex flex-wrap justify-center">
        <div class="relative">
            <img src={profile?.palabras?.image[posicion] ? profile?.palabras?.image[posicion] :   null} class="shadow-xl  rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 min-w-[100px] max-w-[130px]" />
        </div>
        </div>
    <div class="w-full text-center mt-20">
        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
            <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-white">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length + profile?.aprendidas?.ingles.length : 0}</span>
                <span class="text-sm text-white">Palabras</span>
            </div>
            
            <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-white">{token ? vistas?.length : 0}</span>
                <span class="text-sm text-white">Veces vista</span>
            </div>
            <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-white">{profile?.aprendidas?.ingles.length ? profile?.aprendidas?.ingles.length : 0}</span>
                <span class="text-sm text-white">Aprendidas</span>
            </div>

    </div>
</div>
</div>
    )
}