<script>
    import axios from "axios"
    import TheHeader from "@/components/TheHeader.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "UsersProfil",
        components: { TheHeader, TheFooter },
        data() {
            return {
                modify: false,
                token: localStorage.getItem("token"),
                userId: localStorage.getItem("userId"),
                user: {
                    id: this.userId,
                },
                newUser: {
                    firstName: "",
                    lastName: "",
                    job: "",
                },
                file: ""
            }
        },
        mounted() {
            this.userProfil()
        },
        props: {
            IsConnected: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            userProfil() {
                axios.get(`http://localhost:3000/api/auth/users/` + this.userId,
                {
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            'Content-Type': 'application/json'
                        },
                })
                .then((response) => {
                    this.user = response.data;
                    console.log("Utilisateur récupéré");
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            modifyUser() {
                const formData = new FormData();
                formData.append('id', this.userId);
                //Si le prénom est modifié
                if(this.newUser.firstName !== "") {
                    formData.append('firstName', this.newUser.firstName);
                }
                //Si le nom est modifié
                if(this.newUser.lastName !== "") {
                    formData.append('lastName', this.newUser.lastName);
                }
                //Si l'emploi est modifié
                if(this.newUser.job !== "") {
                    formData.append('job', this.newUser.job);
                }
                //Si l'image est modifiée
                if(this.file !== "") {
                    formData.append('image', this.file);
                }
                axios.put(`http://localhost:3000/api/auth/users/` + this.userId, formData,
                { 
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.$router.push({ path: 'homeConnected' });
                    console.log("Profil modifié");
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            selectImage() {
                //Récupère le fichier grâce à ref
                this.file = this.$refs.file.files[0];
            },
        }
    }
</script>
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <main class="sectionUser">
        <article class="User">
            <div v-if="user.firstName == '' || user.lastName == '' || user.job == ''">
                <h3 class="User__emptyProfil">Veuillez complétez votre profil</h3>
            </div>
            <div v-else class="User__container">
                <figure>
                    <img class="User__container__imgDefault" v-if="user.photo == ''" src="http://localhost:3000/images/PhotoUserDefault.jpg"/>
                    <img class="User__container__imgUser" v-else :src="user.photo" alt="Photo de l'utilisateur"/>
                </figure>
                <div class="User__container__nameJob">
                    <h3>{{ user.firstName }} {{ user.lastName }}</h3>
                    <p> {{ user.job }}</p>
                </div>
            </div>
            <button class="User__button" @click="modify = !modify">
                <p class="User__button__modify">Modifier</p>
                <i class="fa-sharp fa-solid fa-pen picto User__button__picto"></i>
            </button>
        </article>
        <article v-if="modify"  class="UserModify">
            <form action="post" class="form">
                <h1>Modifier votre profil</h1>
                <label for="FirstName">Prénom</label>
                <input type="text" name="FirstName" v-model="newUser.firstName"/>
                <label for="LastName">Nom</label>
                <input type="text" name="LastName" v-model="newUser.lastName"/>
                <label for="Job">Poste actuel</label>
                <input type="text" name="Job" v-model="newUser.job"/>
                <label for="file">Photo</label>
                <input type="file" ref="file" name="file" id="file"  @change="selectImage()" aria-label="Selection de l'image"/>
                <button @click="modifyUser()" type="button">Modifier le profil</button>
            </form>
        </article>
    </main>
    <TheFooter/>
</template>
<style lang="scss">
    @import "../assets/sass/_variables.scss"; 

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
                border: none;
                background: #FFFFFF;
                box-shadow: 2px 2px 7px 1px #D8D3D3 inset;
            }
        }
        .User {
            align-items: center;
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
            &__emptyProfil{
                text-align: center;
            }
            &__container{
                display: flex;
                &__imgDefault {
                    height: 200px;
                    clip-path:ellipse(40% 40%);
                }
                &__imgUser {
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                    margin-right: 20px;
                    object-fit: cover;
                }
                &__nameJob{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
            &__button{
                align-items: center;
                &__modify {
                    margin: 0;
                }
                &__picto {
                    display: none;
                }
            }
        }

        .UserModify{
            margin-top: 40px;
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .sectionUser {
            .User {
                &__container{
                    flex-direction: column;
                    &__imgUser {
                        margin-right: 0;
                }
                    &__img{
                        max-height: 100%;
                    }
                    &__nameJob{
                        margin-left: 0;
                        p{
                            margin-left: 0;
                            margin-top: 0;
                        }
                    }
                }
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