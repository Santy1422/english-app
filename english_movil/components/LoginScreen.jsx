import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { HandleRegister } from "../redux/actions";
import axios from "axios";
export const LoginScreen = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
const dispatch = useDispatch()

const handleSubmit = () => {
    axios.post(`http://localhost:8080/ingles/register`,    {
        email: username,
        password: password,
        name: name
       },)
    .then((response) => {
      console.log(response);
      dispatch(HandleRegister(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
    return(
<>

        <View style={styles.centro}>
            <Text>Inicia sesion</Text>
  <TextInput
        style={styles.input}
        value={username}
        placeholder={"Correo electronico"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Contraseña"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
            <TextInput
        style={styles.input}
        value={name}
        placeholder={"Nombre"}
        secureTextEntry
        onChangeText={(text) => setName(text)}
      />
      <Button title={"Iniciar sesion"} onPress={() => handleSubmit()} />
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    centro: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    input: {
        marginTop: 10,
      height: 40,
      width: 230,
      marginBottom: 10,
      backgroundColor: '#fff',
      border: 2,
      borderColor: "black",
      borderRadius: 10,
    },
  });