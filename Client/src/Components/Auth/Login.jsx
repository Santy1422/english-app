import React, { useState } from "react";
import axios from "axios"
export const Login = () =>{

const [user, setUser] = useState({
    email: "",
    password: ""
})

const changeInput = (e) => {
  const { name, value } = e.target
  const newInput = { ...user, [name]: value }
  setUser(newInput)
}

const handleSubmit = async () =>{
  try{
  const response = await axios.post(
    `/ingles`, 
    {
      user
    },
  );
    localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
console.log(response)
}
catch(err){
  console.log(err)
}
  }

return(
  <div>
    <input value={user.email} name="email" onChange={(e) => changeInput(e)}/>
    <input value={user.password} name="password" onChange={(e) => changeInput(e)}/>
    <button onClick={handleSubmit()}>enviar</button>

  </div>
)
  }
