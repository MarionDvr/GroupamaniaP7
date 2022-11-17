<script>
    import axios from "axios"
    import TheHeader from "@/components/TheHeader.vue";
    export default {
        name: "UsersProfil",
        components: { TheHeader },
        data() {
            return {
                UserModify: true,
                User: {
                    FirstName:"",
                    LastName:"",
                    Job:""
                }
            }
        },
        methods: {
            async userProfil() {
                axios.post("http://localhost:3000/api/users/${id}",
                {
                    FirstName: this.User.FirstName,
                    LastName: this.User.LastName,
                    Job: this.User.Job
                })
                .then(() => {
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            async modifyUser() {
                axios.put("http://localhost:3000/api/users/modify",
                { 
                    FirstName: this.User.FirstName,
                    LastName: this.User.LastName,
                    Job: this.User.Job
                })
                .then()
                .catch();
            }
        }
    }
</script>
<template>
    <TheHeader/>
    <main class="sectionUser">
        <article v-if="!UserModify" class="User">
            <figure class="User__img">
                <img src="{{ User.ImgUrl }}"/>
            </figure>
            <h3>{{ User.FirstName }} {{ User.LastName }}</h3>
            <p> {{ User.Job }}</p>
            <router-link><i class="fa-sharp fa-solid fa-pen picto"></i></router-link>
        </article>
        <article v-else class="UserModify">
            <form action="post" class="form">
                <h2>Modifier votre profil</h2>
                <label for="FirstName">Prénom</label>
                <input type="text" name="FirstName" v-model="User.FirstName"/>
                <label for="LastName">Nom</label>
                <input type="text" name="LastName" v-model="User.LastName"/>
                <label for="Job">Poste actuel</label>
                <input type="text" name="Job" v-model="User.Job"/>
                <label for="Photo">Photo</label>
                <input type="file" name="Photo"/>
                <button @click="userProfil()" type="submit">Modifier le profil</button>
            </form>
        </article>
    </main>
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
        }
    }

</style>