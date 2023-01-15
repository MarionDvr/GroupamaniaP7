<script>
    export default {
        name: "TheHeader",
        methods: {
            deconnected() {
                this.$router.push("/");
                console.log("Utilisateur déconnecté")
            },
        },
        props: ['IsConnected']
    }
</script>
<template>  
    <header class="header">
        <nav class="headerConnection" v-if="!IsConnected">
            <router-link to="/" class="headerConnection__logo">
                <figure>
                    <img class="headerConnection__img" src="../assets/logoGroupamania.svg" alt="logo Groupamania"/>
                </figure>
            </router-link>
            <div class="headerConnection__nav">
                <router-link to="/ConnectionSignin" class="headerConnection__nav__link">S'inscrire</router-link>
                <router-link to="/ConnectionSignin" class="pictoConnection"><i class="fa-solid fa-user-plus"></i></router-link>
                <router-link to="/ConnectionLogin" class="headerConnection__nav__link">Se connecter</router-link>
                <router-link to="/ConnectionLogin" class="pictoConnection"><i class="fa-solid fa-circle-user"></i></router-link>
            </div>
        </nav>
        <nav  class="headerConnected" v-if="IsConnected">
            <router-link to="/homeConnected" class="headerConnected__picto">
                <i class="fa-sharp fa-solid fa-house"></i>
                <p class="navToolTip">Accueil</p>
            </router-link>
            <router-link to="/createPost" class="headerConnected__picto">
                <i class="fa-solid fa-plus"></i>
                <p class="navToolTip">Ajouter un post</p>
            </router-link>
            <figure class="logoHeader">
                <img class="headerConnected__img" src="../assets/logoGroupamania.svg" alt="Logo Groupamania"/>
            </figure>
            <div id="menuCompte">
                <ul class="navbar">
                    <li>
                        <a id="title">
                            <i class="fa-solid fa-circle-user"></i>
                            <p class="title__p">Mon compte</p>
                        </a>
                        <ul>
                            <li><router-link to="/userProfil">Modifier mon compte</router-link></li>
                            <li @click="deconnected()"><router-link to="/">Me déconnecter</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    /* Header déconnecté */
    figure {
        margin: 0;
    }
    .headerConnection {
        box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
        display: flex;
        z-index: 5;
        position: relative;
        margin: 0;
        padding: 0;
        height: 100px;
            &__logo {
                margin-left: 35%;
                margin-right: auto;
                width: 300px;
                padding-top: 15px;
                &__img {
                width: 100%;
                }
            }
            &__nav {
                margin-top: 40px;
                &__link {
                text-decoration: none;
                color: $couleur-tertiaire;
                font-size: 14pt;
                padding-right: 40px;
                margin-top: 40px;
                &:hover {
                    color: $couleur-primaire;
                }
                }
            }
            
    }

    .pictoConnection {
        display: none;
    }

    /* Header connecté */
    
    .headerConnected {
        box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 5;
        position: relative;
        margin: 0;
        padding: 0;
        height: 100px;
        &__picto{
            color: $couleur-tertiaire;
            position: relative;
            &:hover{
                color: $couleur-primaire;
            }
        }
        &__img{
            width: 300px;
        }
        &__imgPhone {
            display: none;
        }
    }
    //info-bulle menu
    .navToolTip{
        visibility: hidden;
        position: absolute;
        background-color: $couleur-secondaire;
        color: $couleur-tertiaire;
        z-index: 55;
        padding: 10px;
    }
    .headerConnected__picto:hover .navToolTip {
        visibility: visible;
    }

    #menuCompte {
        height: 50px;
        margin: 0 150px 0 0;
        z-index: 99;
        position: relative;
    }
    #title {
        color: $couleur-tertiaire;
        display: flex;
    }
    #title:hover {
        color: $couleur-primaire;
    }
    .title__p{
        margin: 5px;
    }

    .fa-solid{
        font-size: 20pt;
    }

    .navbar {
        height: 50px;
        padding: 0;
        margin: 0;
        position: absolute;
    }

    .navbar li {
        height: auto;
        width: 135px;
        float: left;
        text-align: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navbar a {
        padding: 10px 0;
        text-decoration: none;
        color: $couleur-tertiaire;
        display: block;
    }

    .navbar li ul {
        display: none;
        height: auto;
        margin: 0;
        padding: 0;
    }

    .navbar li:hover ul {
        display: block;
    }

    .navbar li ul li {
        background-color: $couleur-secondaire;
        border: 1px solid white;
        color: $couleur-tertiaire;
    }

    .navbar li ul li a:hover {
        background-color: #fab6b6;
        color: $couleur-tertiaire;
    }

    
    @media screen and (max-width: 1000px) /* Petit écran - Tablette */
    {
    //Menu utilisateur non connecté -- Tablette
        .headerConnection {
            &__logo {
                margin-left: 5%;
                padding-left: 0;
            }
        }
    //Menu utilisateur connecté -- Tablette
        .headerConnected {
                &__img {
                    display: block;
                }
                &__imgPhone {
                    display: none;
                }
        }
        

    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
    //Menu utilisateur non connecté -- Smartphone
        .headerConnection {
            display: flex;
            align-items: center;
            &__logo {
                padding: 0;
            }
            &__img {
                max-width: 100%;
                min-width: 150px;
                margin-right: 30px;
            }
            &__nav {
                display: flex;
                justify-content: space-between;
                margin: 0;
                &__link {
                    display: none;
                }
            }
        }
        .pictoConnection {
            margin-bottom: 10px;
            display: block;
            margin-right:60px;
            color: $couleur-tertiaire;
            font-size: 100%;
        }
    }
    //Menu utilisateur connecté -- Smartphone
    .headerConnected {
        padding-left: 3%;
        padding-right: 3%;
        justify-content: space-evenly;
        &__img {
            display: none;
        }
        &__imgPhone {
            display: block;
            width: 50px;
        }
    }
    #title {
        align-items: center;
        p {
            margin-right: 0;
        }
    }

    .logoHeader {
        display: none;
    }
</style>