import React, {useEffect, useState} from "react";

import axios from "axios";
import { useSelector } from "react-redux";
export const useCard = (setChangeCard, changeCard) =>{
    const profile = useSelector((state) => state.profile)
    const test = useSelector((state) => state.test)
    const token = localStorage.getItem("accessToken");

    const [posicion, setPosicion] = useState(0)    
const [español, setEspañol] = useState(false)
const [saveWords, setSaveWords] = useState(false)

const [check, setCheck] = useState()
const [registrar, setRegistrar] = useState([])

const next = () => {
    if(profile?.palabras?.ingles[posicion + 1] === undefined && token) setPosicion(0)
    
    else{
    setEspañol(false)
    setPosicion(posicion + 1)
}

} 
const leer = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(
      profile?.palabras?.ingles[posicion] ? profile?.palabras?.ingles[posicion] : test[0].ingles[posicion]
    );
    utterThis.lang = 'en-UK';
    utterThis.rate = 0.9; // Ajustar la velocidad (rango: 0.1 - 10)
    utterThis.pitch = 1.1; // Ajustar el tono (rango: 0 - 2)
    utterThis.volume = 0.8; // Ajustar el volumen (rango: 0 - 1)
    synth.speak(utterThis);
  }
const prev = () => {
    if(posicion === 0) setPosicion(profile?.palabras?.ingles.length -1)
    else{
        setEspañol(false)

    setPosicion(posicion -1)
}
}   
const sendResults = () =>{
        try{
         axios.put("/ingles/save", {
            email: profile.email,
            aprendida: registrar,
          })
        .then((scces) =>  
        setSaveWords(false),
        setRegistrar([])
         )
    }
    catch(err){
        console.log(err)
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
.then((succces) => setChangeCard(!changeCard),
profile?.palabras?.ingles[posicion + 1] ? next() : prev())

}
catch(err) {
    console.log(err)
}
 
}

var palabraEspañol = token ? profile?.palabras?.español[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.español[posicion]?.slice(1)?.toLowerCase() : test[0].español[posicion]
var palabraIngles = token ? profile?.palabras?.ingles[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.ingles[posicion]?.slice(1)?.toLowerCase() : test[0].ingles[posicion]
var vistas = profile?.vistas?.filter((ele) => ele.toLowerCase() === profile?.palabras?.ingles[posicion].toLowerCase())
return{
    vistas, check,  posicion, español, next, prev, palabraEspañol, palabraIngles, setEspañol, deleteWord, changeCard, leer, registrar, setRegistrar, sendResults, saveWords, setSaveWords
}
}