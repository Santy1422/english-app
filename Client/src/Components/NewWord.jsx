import React, { useEffect, useState } from "react";
import axios from "axios"
import { useSelector } from "react-redux";


export const NewWord = () =>{

    const profile = useSelector((state) => state.profile)

    const [palabras, setPalabras] = useState({
        palabra: "",
        word: "",
        image: ""
    })    
    const [spanish, setSpanish] = useState([]);
    const [english, setEnglish] = useState([]);
    const [screen, setScreen] = useState([]);
    const changeInput = (e) =>{
        setPalabras({...palabras,
            [e.target.name]: e.target.value,})
    }
console.log(spanish, english, screen)
const bulk = async() =>{
    let search = palabras.word
  
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
    setSpanish([...spanish, palabras.palabra]);
  
    setPalabras({
      palabra: "",
      word: ""  
    }) 
  }
    const agregar = async () =>{
        try{

        await axios.put("/ingles", {
            email: profile.email,
            palabra: spanish,
            word: english,
            image: screen

          })
        .then((scces) =>  setPalabras({
            palabra: "",
            word: ""  
           
        },
        setEnglish([]),
        setSpanish([]),
        setScreen([])) )
    }
    catch(err){
        console.log(err)
    }
    }




    return(
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div>
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Agrega nuevas palabras</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" onChange={(e) => changeInput(e)} value ={palabras.palabra} id="ingles" name="palabra" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en español</label>
						</div>
						<div class="relative">
							<input autocomplete="off"  onChange={(e) => changeInput(e)} value ={palabras.word} id="ingles" name="word" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Palabra en ingles</label>
						</div>
                        <div class="container py-10 px-10 mx-0 min-w-full flex flex-row">
							<button onClick={() => agregar()} class="bg-blue-500 text-white rounded-md px-2 py-1">Enviar palabras</button>
                            <button onClick={() => bulk()} class="bg-blue-500 text-white rounded-md px-2 py-1">Agregar palabras</button>
						</div>
                        <p>Recuerda enviar las palabras actualmente tienes {spanish.length}</p>
                        {english.map((ele) => <li>{ele}</li>)}

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}