const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const app = express();
const dotenv = require('dotenv').config();
const MY_DB_IDENTIFIERS = process.env.mongoDBIdentifiers;

//Connexion à MangoDB
mongoose.connect('mongodb+srv://' + MY_DB_IDENTIFIERS + '@cluster1.gudnqbd.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //Headers pour débloquer les erreurs CORS (Puisque les requêtes viennent de deux serveurs différents)
app.use((req, res, next) => {
    //Accéder à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Envoyer des requêtes avec les méthodes GET, POST, PUT, DELETE, PATCH et OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //Ajouter les headers aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    next();
  });

app.use(express.json());
//Attribution des middlewares aux bonnes routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;