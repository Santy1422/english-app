import  { useEffect, useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
import {InputRegister} from "../../redux/actions"
import { useDispatch } from "react-redux";
export const useLogin = () =>{

  const dispatch = useDispatch()
const history = useHistory()  
const [user, setUser] = useState({
    email: "",
    password: "",
    name: ""
})
const [register, setRegister] = useState(false)
const [url, setUrl] = useState("register")
const [incorrecto, setIncorrecto] = useState(false)

useEffect(() =>{
if(url === "login") setUrl("register")
if(url === "register") setUrl("login")

}, [register])


const changeInput = (e) => {
  e.preventDefault() 
   const { name, value } = e.target
  const newInput = { ...user, [name]: value }
  setUser(newInput)
}

const handleSubmit = async () =>{
  try{
  const response = await axios.post(
    `/ingles/${url}`, 
    {
     email: user.email,
     password: user.password,
     name: user.name
    },
  );
  localStorage.setItem("accessToken", response?.data?.token)
dispatch(InputRegister(response.data.user))
  history.push("/dashboard") 
    }
catch(err){
  setIncorrecto(!incorrecto)
  console.log(err)
}
  }

return{changeInput, handleSubmit, user, setUser, register, setRegister, incorrecto, setIncorrecto}
  }
