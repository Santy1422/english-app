import  { useState} from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Change, InputRegister } from "../../redux/actions";
export const useCard = (setChangeCard, changeCard) =>{
    const profile = useSelector((state) => state.profile)
    const token = localStorage.getItem("accessToken");

    const [posicion, setPosicion] = useState(0)    
const [español, setEspañol] = useState(false)
const [saveWords, setSaveWords] = useState(false)
const tokenUser = localStorage.getItem("accessToken");

const [check, setCheck] = useState()
const [registrar, setRegistrar] = useState([])
const dispatch = useDispatch()
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
      profile?.palabras?.ingles[posicion] && profile?.palabras?.ingles[posicion]
    );
    utterThis.lang = 'en-UK';
    utterThis.rate = 0.6; // Ajustar la velocidad (rango: 0.1 - 10)
    utterThis.pitch = 0.7; // Ajustar el tono (rango: 0 - 2)
    utterThis.volume = 0.5; // Ajustar el volumen (rango: 0 - 1)
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
         dispatch(InputRegister(scces.data),
        setSaveWords(false),
        setRegistrar([]))

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
.then((succces) => 
dispatch(InputRegister(succces.data)),
setChangeCard(!changeCard),    
 dispatch(Change()),

profile?.palabras?.ingles[posicion + 1] ? next() : prev())

}
catch(err) {
    console.log(err)
}
 
}

var palabraEspañol = token && profile?.palabras?.español[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.español[posicion]?.slice(1)?.toLowerCase() 
var palabraIngles =profile?.palabras?.ingles[posicion]?.charAt(0)?.toUpperCase() + profile?.palabras?.ingles[posicion]?.slice(1)?.toLowerCase() 
var vistas = profile?.vistas?.filter((ele) => ele?.toLowerCase() === profile?.palabras?.ingles[posicion]?.toLowerCase())


return{
    vistas, check,  posicion, español, next, prev, palabraEspañol, palabraIngles, setEspañol, deleteWord, changeCard, leer, registrar, setRegistrar, sendResults, saveWords, setSaveWords
}
}