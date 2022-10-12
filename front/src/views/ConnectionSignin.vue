<script>
    import TheHeader from "@/components/TheHeader";
    export default {
        name: "ConnectionLogin",
        components: { TheHeader },
        data() {
            return {
                dataSignin: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            SigninRegexp() {
            }
        }
    }
</script>

<template>
    <TheHeader/>
    <main>
        <section class="SigninSection">
            <figure class="SigninSection__logo">
                        <img src="../assets/logoConnexion.svg" alt="Logo Groupamania"/>
                    </figure>
            <form class="SigninSection__form">
                <h2>Inscription</h2>
                <label for="emailSignin" class="SigninSection__form__label">E-mail</label>
                <input name="emailSignin" type="email" v-model="dataSignin.email" class="SigninSection__form__input" required>
                <p id="emailErrorMsg"></p>
                <label for="passwordSignin" class="SigninSection__form__label">Mot de passe</label>
                <input name="passwordSignin" type="password" v-model="dataSignin.password" class="SigninSection__form__input" required>
                <p id="passwordErrorMsg"></p>
                <button type="submit">S'inscrire</button>
            </form>
        </section>
    </main>
</template>

<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;
    
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
                margin-bottom: 25px;
                background: #FFFFFF;
                box-shadow: 2px 2px 7px 1px #D8D3D3 inset;
            }
        
        }
    }
    #emailErrorMsg, #passwordErrorMsg {
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
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .SigninSection {
            padding:0;
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