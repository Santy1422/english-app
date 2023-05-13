import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Change, InputRegister } from "../../redux/actions";
export const useAdd = (newCard, setNewCard, paginas, e) => {
    const profile = useSelector((state) => state.profile)
const dispatch = useDispatch()
    const [spanish, setSpanish] = useState([]);
    const [english, setEnglish] = useState([]);
    const [ejemplo, setEjemplo] = useState([]);

    const [screen, setScreen] = useState([]);
    const [traslation, setTraslation] = useState("")
    const [spanishWord, setSpanishWord] = useState("")
    const [palabras, setPalabras] = useState({ //para los post palabras es titulo word descripcion imagen imagen ejemplo categoria
      palabra:  spanishWord ? spanishWord : "",
      word: "",
      image: "",
      ejemplo: ""
  })    

  const changeInput = (e) => {
    setPalabras({
      ...palabras,
      [e.target.name]: e.target.value,
    });
    setTraslation(e.target.value);
  };
  const autoCompletar = async (es) => {
    try {
      // 
      let traduccion = await axios.get(`https://api.mymemory.translated.net/get?q=${traslation}&langpair=en|es`);
       setSpanishWord(traduccion?.data?.matches[1]?.translation)
        console.log(traduccion)
    } catch (err) {
      console.log(err);
    }
  }
  const bulk = async() =>{
    let search = palabras.word || spanishWord
  
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        'query': search,
        'per_page': ''
      },
      headers: {
        'Authorization': 'qVCoI6tAFaG3g5O3IQPMFiUduRrIfm3DMQKg09i930B77EaYU699y6gJ'
      }
    })
  
    setScreen([...screen, response.data.photos[0].src.medium]);
    setEnglish([...english, palabras.word]);
    setSpanish([...spanish, palabras.palabra ? palabras.palabra : spanishWord]);
    setEjemplo([...ejemplo, palabras.ejemplo]);

  
    setPalabras({
      palabra: "",
      word: ""  ,
      ejemplo: ""  ,

    }) 
    setSpanishWord("")
  }

  const agregar = async () => {
  
    try {
      
      await axios.put("/ingles", {
        email: profile.email,
        palabra:  spanish ,
        word: english,
        image: screen,
        ejemplo: ejemplo.length && ejemplo || undefined
      }).then((scces) => {
        dispatch(InputRegister(scces.data));
        setPalabras({
          palabra: "",
          word: "",
          spanishWord: "",
          traslation: "",
          ejemplo: "",
        });
        setEnglish([]);
        setSpanish([]);
        setScreen([]);
        setEjemplo([]);

        setNewCard(!newCard);
        dispatch(Change());
      });
    } catch(err) {
      console.log(err);
    }
  };
  const agregarPost = async () => {
  
    try {
            await axios.put("/ingles/post", {
                email: profile.email,
                teory: [
                  {
                    title: palabras.palabra,
                    category: '', // Add category here if needed
                    content: palabras.word,
                    image: '', // Add image here if needed
                  }
                ]
              }).then((success) => {
                setPalabras({
                  palabra: "",
                  word: "",
                  spanishWord: "",
                  traslation: "",
                  ejemplo: "",
                });
              });
        
    

    } catch(err) {
      console.log(err);
    }
  };

    return {
        agregarPost,  changeInput,   agregar,   bulk,  autoCompletar,    spanish, setSpanish, english, setEnglish, ejemplo, setEjemplo, screen, setScreen, traslation, setTraslation, spanishWord, setSpanishWord, palabras, setPalabras
    }
    
};
