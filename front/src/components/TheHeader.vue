<script>
    import ConnectionLogin from "../views/ConnectionLogin";
    import ConnectionSignin from "../views/ConnectionSignin";
    export default {
        name: "TheHeader",
        components: { ConnectionLogin, ConnectionSignin }
    }
</script>

<template>  
    <header class="header">
        <router-link to="/" class="header__logo">
            <figure>
                <img class="header__logo__img" src="../assets/logoGroupamania.svg" alt="logo Groupamania"/>
            </figure>
        </router-link>
        <div class="header__nav">
            <router-link to="/ConnectionSignin" class="header__nav__link">S'inscrire</router-link>
            <router-link to="/ConnectionSignin" class="pictoConnection"><i class="fa-solid fa-user-plus"></i></router-link>
            <router-link to="/ConnectionLogin" class="header__nav__link">Se connecter</router-link>
            <router-link to="/ConnectionLogin" class="pictoConnection"><i class="fa-solid fa-circle-user"></i></router-link>
        </div>
    </header>
</template>

<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    .header {
        box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
        display: flex;
        z-index: 5;
        position: relative;
        margin: 0;
        padding: 0;
        height: 100px;
            &__logo {
                margin-left: auto;
                margin-right: auto;
                padding-left: 5%;
                &__img {
                width: 300px;
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

    @media screen and (max-width: 1000px) /* Petit écran - Tablette */
    {
        .header {
            &__logo {
                margin-left: 0;
                padding-left: 0;
            }
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .header {
            &__logo {
                margin-top: 10px;
                    &__img {
                        max-width: 100%;
                        min-width: 270px;
                    }
                }
            &__nav {
                display: flex;
                justify-content: space-between;
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
            font-size: 175%;
        }
    }
</style>