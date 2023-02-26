const express = require('express');
const axios = require('axios');

const UserModel = require('../models/user.model');
const router = express.Router();

router.post("/", async (req, res) =>{
  const {email, name, picture} = req.body;

  const existe = await UserModel.findOne({ email: email })
  if(existe) res.status(200).send(existe)
  else{
      const newUser = await UserModel.create({ email, name, picture })
      res.status(200).send(newUser)
  }
})

router.put("/", async (req, res) => {
    const { email, palabra, word, image } = req.body;

    const usuario = await UserModel.findOne({ email: email });
  
    if (usuario) {
      palabra.map((p) => usuario.palabras.español.push(p));
      word.map((w) => usuario.palabras.ingles.push(w));
      image.map((img) => usuario.palabras.image.push(img));

      await usuario.save();
      res.status(200).json({ message: "Objeto actualizado correctamente" });
    } else {
      res.status(404).json({ message: "No se encontró el usuario" });
    }
  });

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
        res.status(200).send("Palabras eliminadas");
      } else {
        res.status(404).json({ message: "No se encontró el elemento" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  });



module.exports = router;
