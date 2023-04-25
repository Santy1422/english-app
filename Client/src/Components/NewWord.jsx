import React, { useState} from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
import { Change, InputRegister } from "../redux/actions";

export const NewWord = ({newCard, setNewCard, paginas}) =>{

    const profile = useSelector((state) => state.profile)
const dispatch = useDispatch()

    const [spanish, setSpanish] = useState([]);
    const [english, setEnglish] = useState([]);
    const [ejemplo, setEjemplo] = useState([]);

    const [screen, setScreen] = useState([]);
    const [traslation, setTraslation] = useState("")
    const [spanishWord, setSpanishWord] = useState("")
    const [palabras, setPalabras] = useState({
      palabra:  spanishWord ? spanishWord : "",
      word: "",
      image: "",
      ejemplo: ""
  })    
    const changeInput = (e) =>{
        setPalabras({
          ...palabras,
          [e.target.name]: e.target.value,
        });
        setTraslation(e.target.value);
      };


    const autoCompletar = async (es) => {
      try {
        // 
        console.log(traslation)
        let traduccion = await axios.get(`https://api.mymemory.translated.net/get?q=${traslation}&langpair=en|es`);
         setSpanishWord(traduccion?.data?.matches[1]?.translation)

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
    setSpanish([...english, palabras.palabra ? palabras.palabra : spanishWord]);
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



    return(
     <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-gray-800 w-full mb-6 shadow-lg rounded-xl mt-20 my-0">
      <div>
		</div>
		<div class="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold  text-white">Agrega nuevas palabras</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

          
						</div>
            <div class="relative">
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-white ">English Word</label>
<div class="relative mb-6">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input  onChange={(e) => changeInput(e)} value ={palabras.word} id="word" name="word" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Word"/>
</div>
<div class="relative">
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-white ">Spanish Word</label>
<div class="relative mb-6">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" onClick={()=> autoCompletar()} 
              onChange={(e) => changeInput(e)} value ={ spanishWord ? spanishWord : palabras.palabra}  id="ingles" name="palabra" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Palabra o click para autocompletar"/>
</div>
<label for="input-group-1" class="block mb-2 text-sm font-medium text-white ">Sentence</label>
<div class="relative mb-6">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="textarea" onChange={(e) => changeInput(e)}
               value ={ palabras.ejemplo} id="ingles" name="ejemplo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="¿Quieres añadir una oracion o ejemplo?"/>
</div>
						</div>

       
<div class="">
  <button onClick={() => bulk()} class="btn btn-primary bg-white text-black text-sm sm:text-base md:text-lg">Agregar palabras</button>
  {spanish.length ? 
  <button onClick={() => agregar()} class="btn btn-primary bg-white text-black text-sm sm:text-base sm:py-2 md:text-lg">Enviar palabras</button>
  : null
}
</div>
            <ProfileWords spanish={spanish} english={english} screen={screen} paginas={paginas}/>
            
					</div>
				</div>
			</div>
	</div>
</div>
    )
}