<script>
    import axios from "axios"
    export default {
        name: "FormLogin",
        data() {
            return {
                dataLogin: {
                    email: "",
                    password: ""
                },
            }
        },
        methods: {
            UserConnect() {
                axios.post("http://localhost:3000/api/auth/login",
                {
                    email: this.dataLogin.email,
                    password: this.dataLogin.password
                })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);
                    console.log("Utilisateur connecté")
                    this.$router.push({ path: 'homeConnected' });
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                    alert('Email et mot de passe incorrects');
                });
            }
        }
    }
</script>
<template>
    <main>
        <section class="LoginSection">
            <figure class="LoginSection__logo">
                <img src="../assets/images/logoConnexion.svg" alt="Logo Groupamania"/>
            </figure>
            <form class="LoginSection__form">
                <h2>Connexion</h2>
                <label for="emailLogin" class="LoginSection__form__label">E-mail</label>
                <input id="emailLogin" type="email" v-model="dataLogin.email" class="LoginSection__form__input" required>
                <label for="passwordLogin" class="LoginSection__form__label">Mot de passe</label>
                <input id="passwordLogin" type="password" v-model="dataLogin.password" class="LoginSection__form__input" required>
                <button type="button" @click="UserConnect()">Se connecter</button>
            </form>
        </section>
    </main>
</template>
<style lang="scss">
    @import "../assets/sass/_variables.scss"; 

    .LoginSection {
        display: flex;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 5%;
        background: $background-grey;
        height: 100%;
        &__logo {
            width: 50%;
            margin-right: -100px;
            margin-left: 70px;
            z-index: 1;
        }
        &__form {
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 40px;
            padding: 50px;
            margin-right: 7%;
            width: 30%;
            box-shadow: 5px 11px 10px 1px #CAC3C3;
            position:relative;
            z-index: 2;
            h2 {
                color: $couleur-primaire;
                margin-bottom: 50px;
            }
            &__input {
                height: 35px;
                border: none;
                width: 70%;
                margin-top: 10px;
                margin-bottom: 55px;
                background: #FFFFFF;
                box-shadow: 2px 2px 7px 1px #D8D3D3 inset;
                &:focus-visible { 
                    outline-color: $couleur-primaire;
                }
            }
        }
    }

    button {
        background: $couleur-secondaire;
        color: $couleur-tertiaire;
        font-size: 14pt;
        border: none;
        margin-top: 20px;
        padding: 10px;
        width: 200px;
        box-shadow: 3px 2px 9px 1px #CAC3C3;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .LoginSection {
            padding: 0;
            &__logo {
                display: none;
            }
            &__form {
                width: 100%;
                margin: 5%;
                &__input {
                    width: 90%;
                }
            }
        }
    }
</style>