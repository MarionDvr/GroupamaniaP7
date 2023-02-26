const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//S'enregistrer
exports.signin = (req, res) => {
    //Hachage du mot de passe
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            //Création du nouvel utilisateur (email entrée et le mot de passe haché)
            const user = new User({
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
            //Sauvegarde du nouvel utilisateur
            user.save()
                .then(() => res.status(201).json({message: 'Utilisateur créé'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//Se connecter
exports.login = (req, res) => {
    //Rechercher l'email dans la base de données
    User.findOne({ email: req.body.email})
        .then(user => {
            //Si l'email n'est trouvé, renvoyer un message d'erreur
            if(!user) {
                return res.status(400).json({ message: 'Paire identifiant/mot de passe incorrecte' });
            } 
            //else {
               //comparer le mot de passe entré avec le hash enregistré dans la base de données
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if(!valid) {
                            return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
                        } 
                        //else {
                            //Si le mot de passe est valide, renvoie de la réponse avec l'id utilisateur et le token
                            res.status(200).json({
                                userId: user._id,
                                //sign() pour chiffrer un nouveau token (qui contient L'id utilisateur, la clef secrète pour crypter le token et la durée de validité du token)
                                token: jwt.sign(
                                    { userId: user._id },
                                    'GROUPAMANIA_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                )
                            })
                        //}
                    })
                    .catch(error => res.status(500).json({ error }));
            //}
        })
        .catch(error => res.status(500).json({ message:'login ne fonctionne pas' }));
};

//Modifier le user
exports.modifyUser = (req, res) => {
    const userObject = req.file ? {
        photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    User.findOne({ _id: req.params.id })
    .then(user => {
        user.updateOne({ ...userObject }, { _id: req.params.id })
        .then((user) => res.status(200).json({message: 'Utilisateur modifié!'}))
        .catch(error => res.status(405).json({error}))
    });

};

//Récupérer le user
exports.getUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => res.status(200).json(user))
    .catch( error => { res.status(500).json({ error })});
};

//Récupérer les users
exports.getAllUsers = (req, res) => {
    User.find()
    .then((users) => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
}