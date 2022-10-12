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
            <router-link to="/ConnectionLogin" class="header__nav__link">Se connecter</router-link>
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
                margin-left: 40%;
                margin-right: auto;
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
</style>