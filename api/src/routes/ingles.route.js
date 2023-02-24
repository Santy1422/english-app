const express = require('express');
const axios = require('axios');

const OpenAI = require('openai-api');


const { checkJwt, checkAdmin } = require('../utils/firebase-stuff');
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
      usuario.palabras.español.push(palabra);
      usuario.palabras.ingles.push(word);
      usuario.palabras.image.push(image);

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



  router.post('/chat', async (req, res) => {
    const question = req.body.question;
  
    // Hacer una solicitud a la API de ChatGPT
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Pregunta: ${question}\nRespuesta:`,
      max_tokens: 50,
      temperature: 0.7,
      n: 1,
      stop: ['\n']
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      }
    });
  
    const answer = response.data.choices[0].text.trim();
  
    res.send({ answer });
  });
module.exports = router;
