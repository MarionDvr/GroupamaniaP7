const mongoose = require('mongoose');
//Création du schéma de données pour les posts
const postSchema = mongoose.Schema({
    userId: { type: String, required: true},
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String], default: [] },
    date: { type: Date, required: true }
});
//Exportation du schéma en tant que modèle mongoose et disponible pour l'app
module.exports = mongoose.model('Post', postSchema);