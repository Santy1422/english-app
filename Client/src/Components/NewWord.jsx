import React, { useState} from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { ProfileWords } from "./ProfileWords";
import { Change, InputRegister } from "../redux/actions";

export const NewWord = ({newCard, setNewCard}) =>{

    const profile = useSelector((state) => state.profile)
const dispatch = useDispatch()

    const [spanish, setSpanish] = useState([]);
    const [english, setEnglish] = useState([]);
    const [screen, setScreen] = useState([]);
    const [traslation, setTraslation] = useState("")
    const [englishWord, setEnglishword] = useState("")
    const [palabras, setPalabras] = useState({
      palabra: "",
      word: englishWord ? englishWord : "",
      image: ""
  })    
    const changeInput = (e) =>{
        setPalabras({
          ...palabras,
          [e.target.name]: e.target.value,
        });
        setTraslation(e.target.value);
      };
      console.log(traslation);
    console.log(traslation)

    const autoCompletar = async (es) => {
      try {
        let traduccion = await axios.get(`https://api.mymemory.translated.net/get?q=${traslation}&langpair=es|en`);
        setEnglishword(traduccion?.data?.matches[1]?.translation)
      } catch (err) {
        console.log(err);
      }
    }

const bulk = async() =>{
    let search = palabras.word || englishWord
  
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
    setEnglish([...english, palabras.word ? palabras.word : englishWord]);
    setSpanish([...spanish, palabras.palabra]);
  
    setPalabras({
      palabra: "",
      word: ""  ,
    }) 
    setEnglishword("")
  }
  const agregar = async () => {
    try {
      await axios.put("/ingles", {
        email: profile.email,
        palabra: spanish,
        word: english,
        image: screen
      }).then((scces) => {
        dispatch(InputRegister(scces.data));
        setPalabras({
          palabra: "",
          word: "",
          englishWord: "",
          traslation: ""
        });
        setEnglish([]);
        setSpanish([]);
        setScreen([]);
        setNewCard(!newCard);
        dispatch(Change());
      });
    } catch(err) {
      console.log(err);
    }
  };



    return(
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-bg-yellow-500 w-full mb-6 shadow-lg rounded-xl mt-16">
		<div>
		</div>
		<div class="relative px-4 py-10 bg-yellow-500 shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold text-primary text-white">Agrega nuevas palabras</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" onChange={(e) => changeInput(e)} value ={palabras.palabra} id="ingles" name="palabra" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en español</label>
						</div>
						<div class="relative">
							<input autocomplete="off"  onClick={()=> autoCompletar()} onChange={(e) => changeInput(e)} value ={ englishWord ? englishWord : palabras.word} id="ingles" name="word" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en ingles</label>
						</div>
            
<div class="">
  <button onClick={() => bulk()} class="btn btn-primary bg-white text-black text-sm sm:text-base md:text-lg">Agregar palabras</button>
  {spanish.length ? 
  <button onClick={() => agregar()} class="btn btn-primary bg-white text-black text-sm sm:text-base sm:py-2 md:text-lg">Enviar palabras</button>
  : null
}
</div>
            <ProfileWords spanish={spanish} english={english} screen={screen}/>
            
					</div>
				</div>
			</div>
	</div>
</div>
    )
}