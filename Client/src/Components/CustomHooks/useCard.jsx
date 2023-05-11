import  { useState} from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Change, InputRegister } from "../../redux/actions";
const Hyphenation = require('hyphen');

export const useCard = (setChangeCard, changeCard) =>{
    const profile = useSelector((state) => state.profile)
    const token = localStorage.getItem("accessToken");

    const [posicion, setPosicion] = useState(0)    
const [español, setEspañol] = useState(false)
const [saveWords, setSaveWords] = useState(false)
const hyphenation = new Hyphenation();
hyphenation.loadLanguage('en'); 
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
    const text = profile?.palabras?.ingles[posicion] || '';
  
    // Separación de sílabas utilizando hyphen
    const hyphenatedText = hyphenation.hyphenateText(text).join('');
  
    const utterThis = new SpeechSynthesisUtterance(hyphenatedText);
    utterThis.lang = 'en-UK';
    utterThis.rate = 0.6; // Ajusta la velocidad según sea necesario (rango: 0.1 - 10)
    utterThis.pitch = 0.7; // Ajusta el tono según sea necesario (rango: 0 - 2)
    utterThis.volume = 0.5; // Ajusta el volumen según sea necesario (rango: 0 - 1)
    synth.speak(utterThis);
  };
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
      image: profile.palabras.image[posicion],
      ejemplo: profile.palabras.ejemplo[posicion]

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
var ejemplo =profile?.palabras?.ejemplo[posicion]

return{
    ejemplo, vistas, check,  posicion, español, next, prev, palabraEspañol, palabraIngles, setEspañol, deleteWord, changeCard, leer, registrar, setRegistrar, sendResults, saveWords, setSaveWords
}
}