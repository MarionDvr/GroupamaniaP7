# Groupomania

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues.

# Dossier back-end

- Serveur Node.js
- Framework Express.js
- Base de données MongoDB
- API REST

# Installation - back-end

1. Installer Node.js sur votre machine (https://nodejs.org/en/)
2. Dans le terminal : cd back
    a) Installer le package nodemon : npm install -g nodemon
    b) Installer Express.js : npm install --save express
    c) Installer le package Multer (pour la gestion des fichiers) : npm install --save multer
    d) Installer le package fs (pour la suppression des fichiers) : npm install fs
    e) Installer Mongoose (pour la connexion à la base de données) : npm install mongoose
    
3. Pour la sécurité de l'application
    a) npm install dotenv
    b) npm install --save brypt
    c) npm install --save jsonwebtoken
    d) npm install password-validator
    
4. Lancer le serveur : nodemon server (le server est accessible sur le port 3000: http://localhost:3000).

# Dossier font-end

- Framework Vue.js
- Axios

# Installation - front-end

- Installer Vue.js : npm install -g @vue/cli
- Créez le projet vue create front
- Lancer la commande cd front
- Installer tous les modules nécessaires au fonctionnement de l'application : npm install
- Installer Axios : npm install axios
- Lancer la commande npm run serve (le server est accessible en local sur le port 8080 : http://localhost:8080/).
