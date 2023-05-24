import React from "react";

export const Estadistics = ({profile, posicion, vistas}) =>{

    return(
        <div>
        <div class="flex flex-wrap justify-center">
        <div class="relative">
            <img src={profile?.palabras?.image[posicion] && profile?.palabras?.image[posicion] || "https://static.vecteezy.com/system/resources/previews/002/517/142/non_2x/the-person-asks-a-question-and-wants-to-get-an-answer-flat-character-illustration-vector.jpg" } 
            class="shadow-xl  rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 min-w-[130px] max-w-[130px] min-h-[130px] max-h-[130px]" />
        </div>
        </div>
    <div class="w-full text-center mt-20">
        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
            <div class="p-3 text-center">
                <span class="text-xl font-bold block  uppercase tracking-wide text-white">{profile?.palabras?.ingles.length ? profile?.palabras?.ingles.length + profile?.aprendidas?.ingles.length : 0}</span>
                <span class="text-sm text-white">Palabras</span>
            </div>
            
            <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-white">{vistas?.length ? vistas?.length : 0}</span>
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