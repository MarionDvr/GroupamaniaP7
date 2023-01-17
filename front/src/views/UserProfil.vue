<script>
    import axios from "axios"
    import TheHeader from "@/components/TheHeader.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "UsersProfil",
        components: { TheHeader, TheFooter },
        data() {
            return {
                IsConnected: true,
                modify: true,
                token: localStorage.getItem("token"),
                userId: localStorage.getItem("userId"),
                user: {
                    id: localStorage.getItem("userId"),
                    firstName:"",
                    lastName:"",
                    job:""
                }
            }
        },
        mounted() {
            this.userProfil()
        },
        methods: {
            async userProfil() {
                axios.get(`http://localhost:3000/api/auth/users/` + this.userId,
                {
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            'Content-Type': 'application/json'
                        },
                })
                .then((response) => {
                    this.user = response.data;
                    console.log("Utilisateur récupéré")
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            async modifyUser() {
                //Ne fonctionne pas, pas de message d'erreur
                axios.put(`http://localhost:3000/api/auth/users/` + this.userId,
                { 
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            'Content-Type': 'application/json'
                    },
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    job: this.user.job
                })
                .then((response) => {
                    this.user = response.data.user;
                    console.log(this.user);
                    //window.location.reload();
                    console.log("Profil modifié")
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            }
        }
    }
</script>
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <main class="sectionUser">
        <article class="User">
            <figure class="User__img">
               <!-- <img src="{{ User.ImgUrl }}"/>-->
            </figure>
            <h3>{{ user.firstName }} {{ user.lastName }}</h3>
            <p> {{ user.job }}</p>
            <button class="User__button" @click="modify = !modify">
                <p class="User__button__modify">Modifier</p>
                <i class="fa-sharp fa-solid fa-pen picto User__button__picto"></i>
            </button>
        </article>
        <article v-if="modify"  class="UserModify">
            <form action="post" class="form">
                <h2>Modifier votre profil</h2>
                <label for="FirstName">Prénom</label>
                <input type="text" name="FirstName" v-model="user.firstName"/>
                <label for="LastName">Nom</label>
                <input type="text" name="LastName" v-model="user.lastName"/>
                <label for="Job">Poste actuel</label>
                <input type="text" name="Job" v-model="user.job"/>
                <label for="Photo">Photo</label>
                <input type="file" name="Photo"/>
                <button @click="modifyUser()" type="submit">Modifier le profil</button>
            </form>
        </article>
    </main>
    <TheFooter/>
</template>
<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    .sectionUser {
        background: $background-grey;
        padding-top: 50px;
        padding-bottom: 100px;
        .form {
        display: block;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        border-radius: 40px;
        padding: 50px;
        width: 50%;
        box-shadow: 5px 11px 10px 1px #CAC3C3;
        h2 {
            margin-bottom: 30px;
        }
        label {
            margin-top: 10px;
            margin-left: 10px;
        }
        input {
            margin-bottom: 10px;
        }
        }
        .User {
            display: block;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            border-radius: 40px;
            padding: 50px;
            width: 50%;
            box-shadow: 5px 11px 10px 1px #CAC3C3;
            position:relative;
            z-index: 2;
            &__img {
                width: 70px;
                height: 70px;
                background: yellow;
                border-radius: 100px;
                margin: 15px;
            }
            &__button{
                &__modify {
                    margin: 0;
                }
                &__picto {
                    display: none;
                }
            }
            
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .sectionUser {
            .User{
                &__button {
                    box-shadow: none;
                    background: none;
                    &__modify{
                        display: none;
                    }
                    &__picto {
                        display: block;
                        font-size: 14pt;
                    }
                    &:hover{
                        color: $couleur-primaire;
                    }
                }
            }
        }
    }

</style>