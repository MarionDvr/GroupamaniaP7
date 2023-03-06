<script>
    import axios from "axios"
    export default {
        name: "FormSignin",
        data() {
            return {
                dataSignin: {
                    email: "",
                    password: "",
                },
                errors: []
            }
        },
        methods: {
            addUser() {
                //Regexp email
                let emailRegExp = new RegExp(/^([a-zA-Z0-9_\-.]+)@groupomania.com$/);
                //Regexp mot de passe
                let passwordRegExp = new RegExp(/^[a-zA-Z0-9_\-.@#]{8}$/);
                this.errors = [];
                if(emailRegExp.test(this.dataSignin.email) == false){
                    this.errors.push("L'email n'est pas valide");
                }
                if(passwordRegExp.test(this.dataSignin.password) == false){
                    this.errors.push("Le mot de passe doit contenir 8 caractères");
                }
                if(!this.dataSignin.email) {
                    this.errors.push("Email requise");
                }
                if(!this.dataSignin.password) {
                    this.errors.push("Mot de passe requis");
                }
                if(this.errors.length) {
                    return false;
                }
                else if(emailRegExp.test(this.dataSignin.email) == true && passwordRegExp.test(this.dataSignin.password) == true) {
                    axios.post("http://localhost:3000/api/auth/signin",
                    {
                        email: this.dataSignin.email,
                        password: this.dataSignin.password,
                        firstName: "",
                        lastName: "",
                        photo: "",
                        job: "",
                        isAdmin: 0
                    })
                    .then((response) => {
                        console.log(response)
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("userId", response.data.userId);
                        this.$router.push({ path: 'homeConnected' });
                        console.log("Utilisateur créé");
                    })
                    .catch(function(erreur) {
                        console.error('Une erreur est survenue' + erreur);
                    });
                }
            }
        }
    }
</script>
<template>
    <main>
        <section class="SigninSection">
            <figure class="SigninSection__logo">
                <img src="../assets/images/logoConnexion.svg" alt="Logo Groupamania"/>
            </figure>
            <form class="SigninSection__form">
                <h2>Inscription</h2>
                <label for="emailSignin" class="SigninSection__form__label">E-mail</label>
                <input id="emailSignin" type="email" v-model="dataSignin.email" class="SigninSection__form__input" required>
                <label for="passwordSignin" class="SigninSection__form__label">Mot de passe</label>
                <input id="passwordSignin" type="password" v-model="dataSignin.password" class="SigninSection__form__input" required>
                <div v-for="error in errors" :key="error">
                    <p id="SigninErrorMsg" v-if="errors.length">{{ error }}</p>
                </div>
                <button type="button" @click="addUser()">S'inscrire</button>
            </form>
        </section>
    </main>
</template>
<style lang="scss">
   @import "../assets/sass/_variables.scss"; 
    
    .SigninSection {
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
            }
        }
    }

    #SigninErrorMsg {
        color: $couleur-primaire;
    }

    button {
        background: $couleur-secondaire;
        color: $couleur-tertiaire;
        font-size: 14pt;
        border: none;
        padding: 10px;
        width: 200px;
        box-shadow: 3px 2px 9px 1px #CAC3C3;
        cursor: pointer;
        &:hover {
            background: $couleur-primaire;
            color: white;
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .SigninSection {
            padding: 0;
            &__logo {
                display: none;
            }
            &__form {
                width: 100%;
                margin: 5%;
                &__input{
                    width: 90%;
                }
            }
        }
    } 
</style>