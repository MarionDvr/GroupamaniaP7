const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const MY_DB_IDENTIFIERS = process.env.mongoDBIdentifiers;

//Connexion à MangoDB
mongoose.connect('mongodb+srv://Groupamania:devroede@cluster1.gudnqbd.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //headers pour débloquer les erreurs CORS (Puisque les resuêtes viennent de deux server différents)
app.use((req, res, next) => {
    //accéder à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    //envoyer des requêtes avec les méthodes GET, POST, PUT, DELETE, PATCH et OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //ajouter les headers aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    next();
  });

//Attribution des middlewares aux bonnes routes
//app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);

  module.exports = app;