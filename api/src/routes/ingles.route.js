const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt')
require('dotenv').config();

const router = express.Router();


const auth = async(req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, process.env.JWT_KEY)
  try {
      const user = await UserModel.findOne({ _id: data._id, 'tokens.token': token })
      if (!user) {
          throw new Error()
      }
      req.user = user
      req.token = token
      next()
  } catch (error) {
      res.status(401).send({ error: 'Not authorized to access this resource' })
  }

}

router.post("/google", async (req, res) =>{
  const {email, name, picture} = req.body;

  const existe = await UserModel.findOne({ email: email })
  if(existe) res.status(200).send(existe)
  else{
      const newUser = await UserModel.create({ email, name, picture })
      res.status(200).send(newUser)
  }
})

router.get("/user", auth, async (req, res) =>{
try{
  const existe = await UserModel.findOne({ email: req.user })
 res.status(200).send(existe)
}
catch(err){
  console.log(err)
}
})


router.put("/", async (req, res) => {
    const {email, palabra, word, image } = req.body;
    const usuario = await UserModel.findOne({ email: email });
  
    if (usuario) {
      palabra.forEach((p, i) => usuario.palabras.español.push(p.toString()));
      word.forEach((w, i) => usuario.palabras.ingles.push(w.toString()));
      image.forEach((img, i) => usuario.palabras.image.push(img.toString()));
      console.log(auth)
      await usuario.save();
      res.status(200).send(usuario)
      if(!word && image){
      palabra.forEach((p, i) => usuario.palabras.vistas.push(p.toString()));
        res.status(200).send(usuario)
      }
    } else {
      res.status(404).json({ message: "No se encontró el usuario" });
    }
  });
  router.put("/save", async (req, res) => {
    const { email, aprendida } = req.body;
try{
    const usuario = await UserModel.findOne({ email: email });
  
    if (usuario) {
      aprendida.forEach((p, i) => usuario.vistas.push(p.toString()));
      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: "No se encontró el usuario" });
    }
  }
  catch(err){
    console.log(err)
  }
}
);


  router.put("/delete", async (req, res) => {
    const { email, palabra, word, image } = req.body;
    
    try {
      const user = await UserModel.findOne({ email: email });  
      if (user) {
        await UserModel.updateOne(
          { email: email },
          { $pull: { 'palabras.español': palabra, 'palabras.ingles': word, 'palabras.image': image } }
        );
        user.aprendidas.español.push(palabra);
        user.aprendidas.ingles.push(word);
        user.aprendidas.image.push(image);
        await user.save();
        res.status(200).send(user);
      } else {
        res.status(404).json({ message: "No se encontró el elemento" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  });

  
  router.post('/register', async (req, res) => {
    // Create a new user
    try {

      
        const user = new UserModel(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await UserModel.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})


router.post('/logout', auth, async(req, res) => {
  // Log user out of all devices
  try {
    console.log(req.user)
      req.user.tokens.splice(0, req.user.tokens.length)
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})

module.exports = router;
