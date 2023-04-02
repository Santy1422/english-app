import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Botones = ({next, palabraEspañol}) =>{

    const profile = useSelector((state) => state.profile)
  
      let posicionAleatoria = Math.floor(Math.random() * profile.palabras.español.length);
      let elementoAleatorio = profile.palabras.español[posicionAleatoria];
      let elementoAleatorio2 = elementoAleatorio;
      
      if (profile.palabras.español.length > 1 && posicionAleatoria !== profile.ultimaPosicion) {
        do {
          posicionAleatoria = Math.floor(Math.random() * profile.palabras.español.length);
        } while (posicionAleatoria === profile.ultimaPosicion);
      
        profile.ultimaPosicion = posicionAleatoria;
        
        elementoAleatorio2 = profile.palabras.español[posicionAleatoria];
      }
            const elementos = [palabraEspañol, elementoAleatorio, elementoAleatorio2];
      elementos.sort(() => Math.random() - 0.5);

      
const [error, setError] = useState(false)
     const checkWord = (elemento) =>{
        console.log(elemento)
        if(elemento === elementos.find((ele) => ele === palabraEspañol)){
            setError(false)
            next()
        } 
        else setError(true)
     }
    return(
     <div>

                    <div class="grid grid-cols-3 gap-4">
      {elementos.map((elemento, index) => (
        <button  style={{
            borderRadius: "9999px",
            backgroundColor: "#f59e0b",
            color: "white",
            border: error ? "2px solid red" : "2px solid white",
          }}
           onClick={() =>checkWord(elemento)} key={index}>{elemento}</button>
      ))}
    </div>       
    </div>            
       
   

        )
}