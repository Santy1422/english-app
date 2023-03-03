import React, {useState} from "react";

import axios from "axios";
import { useSelector } from "react-redux";

export const useCard = (setChangeCard, changeCard) =>{
    const profile = useSelector((state) => state.profile)

    const [posicion, setPosicion] = useState(0)    
const [español, setEspañol] = useState(false)

const next = () => {
    if(profile?.palabras?.ingles[posicion + 1] === undefined) setPosicion(0)
    else{
    setEspañol(false)
    setPosicion(posicion + 1)
}

} 
const leer = () =>{
    const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance(profile?.palabras?.ingles[posicion]);
utterThis.lang = 'en-US';
synth.speak(utterThis);
}
const prev = () => {
    if(posicion === 0) setPosicion(posicion.length)
    else{
        setEspañol(false)

    setPosicion(posicion -1)
}
}   

const deleteWord = async () =>{

    try{
let word = await axios.put("/ingles/delete",
 
{    email: profile.email,
      palabra: profile.palabras.español[posicion],
      word: profile.palabras.ingles[posicion],
      image: profile.palabras.image[posicion]
} )
.then((succces) => alert ("Palabra marcada como aprendida!"), setChangeCard(!changeCard),
profile?.palabras?.ingles[posicion + 1] ? next() : prev())

}
catch(err) {
    console.log(err)
}
 
}


var palabraEspañol = profile?.palabras?.español[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.español[posicion]?.slice(1)?.toLowerCase();
var palabraIngles = profile?.palabras?.ingles[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.ingles[posicion]?.slice(1)?.toLowerCase();

return{
    posicion, español, next, prev, palabraEspañol, palabraIngles, setEspañol, deleteWord, changeCard, leer
}
}