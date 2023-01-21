<script>
import axios from 'axios';

    export default {
        name: "UsersPost",
        data(){
            return{
                IsConnected: true,
                content: "",
                userId: localStorage.getItem("userId"),
                token: localStorage.getItem("token"),
                //Mettre les utilisateurs dans un tableau
                users: [],
                user: {},
                //Mettre les info d'un post dans un objet
                post: {},
                //Mettre les posts récupérer dans un tableau
                posts: [],
                //Pour que la flèche d'ouverture du post soit fermé
                isDeployed: false,

            }
        },
        mounted() {
            this.GetAllPosts(),
            this.GetUsers()
        },
        methods: {
            //Récupérer les users
            GetUsers() {
                axios.get(`http://localhost:3000/api/auth/users/`,
                {
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            'Content-Type': 'application/json'
                        },
                })
                .then((response) => {
                    this.users = response.data;
                    //console.log(this.users)
                    console.log("Utilisateurs récupérés")
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },           
            //Récupérer les posts
            GetAllPosts() {
                axios.get("http://localhost:3000/api/posts",
                {
                    headers: {
                            'Authorization': 'Bearer ' + this.token,
                            'Content-Type': 'application/json'
                        }
                })
                .then((response) => {
                    this.posts = response.data;
                    //console.log(this.posts)
                    
                    console.log("Posts récupérés")
                })
                .catch((error) => { console.log(error)});
            },
            //Supprimer un post
            deletePost() {
                let confirmDeletePost = confirm(
                    "Êtes-vous sûr de vouloir supprimer ce post ?"
                );
                if (confirmDeletePost == true) {
                    axios.delete(`http://localhost:3000/api/posts/` + this.post.id, {
                        headers: {
                            Authorization: "Bearer " + this.token,
                        }
                    })
                    .then(() => { 
                        window.location.reload();
                    })
                    .catch( error => { console.log( error )});
                } else {
                    console.log("Annuler la suppression");
                    return;
                }
            },
            likePost() {
                axios.post(`http://localhost:3000/api/posts/63c511a6122b57fb6dd38bcb/like` , {
                    headers: {
                            Authorization: "Bearer " + this.token,
                        }
                })
                .then((response) => {
                    console.log(response);
                    console.log("Like ajouté");
                    window.location.reload();
                })
                .catch( error => { console.log(error)});
            }
        }
        
    }
</script>
<template>
    <section class="UsersPosts">
        <article v-for="post in posts.slice().reverse()" :key="post._id" class="post">
            <div class="post__user" v-for="user in users.filter((user) => {
                return user._id == post.userId;
              })"
              :key="user._id">
                <figure class="post__user__figure">
                    <img v-if="user.photo == null" src="http://localhost:3000/images/PhotoUserDefault.jpg" class="post__user__figure__img" alt="Photo de l'utilisateur"/>
                    <img v-else :src="user.photo" class="post__user__figure__img" alt="Photo de l'utilisateur"/>
                </figure>
                <div class="post__user__profil">
                    <div class="post__user__profil__name">
                        <p>{{ user.firstName }}</p>
                        <p>{{ user.lastName }}</p>
                    </div>
                    <p class="post__user__profil__job"> 💼 {{ user.job }}</p>
                </div>
            </div>
            <div class="post__elements">
                <h2> {{ post.title }}</h2>
                <!-- Test pour récupéré l'id du post -->
                <!-- <p class="test"> {{ post._id }}</p>  -->
                <figure class="post__elements__figure">    
                    <img :src="post.imageUrl" class="post__elements__figure__img" alt="Photo du post"/>
                </figure>
                <p v-if="isDeployed">{{ post.text }}</p>
                <p v-if="isDeployed"> {{ post.date }}</p>
                </div>
            <div class="post__picto" v-if="isDeployed">
                <div class="post__picto__heart">
                    <i class="fa-solid fa-heart picto" @click="likePost()"></i>
                    <p class="post__picto__likes">{{ post.likes }}</p>
                </div>
                <!-- Modifier le post (seulement par l'utilisateur qui l'a créé)-->
                <router-link to="/modifyPost" v-if="post.userId == userId || user.isAdmin == true">
                    <i class="fa-sharp fa-solid fa-pen picto"></i>
                </router-link>
                <!-- Supprimer le post (seulement par l'utilisateur qui l'a créé)-->
                <i class="fa-solid fa-trash picto" @click="deletePost()" v-if="post.userId == userId"></i>
            </div>
                <div @click="isDeployed = !isDeployed" class="post__elements__arrow">
                    <i v-if="isDeployed" class="fa-solid fa-chevron-up"></i>
                    <i v-else class="fa-solid fa-chevron-down"></i>
                </div>
           
        </article>
    </section>
</template>
<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;
    
@keyframes post {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    50%{
        opacity: 1;
    }
    
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

    .UsersPosts {
        display: flex;
        flex-direction: column;
        margin: 0;
        background: $background-grey;
        .post{
            width: 60%;
            min-height: 250px;
            margin: 60px auto 30px 20%;
            background: white;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            z-index: 2;
            animation: post 500ms ease-in-out forwards;
            &__user{
                background: $couleur-secondaire;
                border-radius: 40px 40px 0px 0px;
                box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
                height: 100px;
                z-index: 80;
                position: relative;
                display: flex;
                &__figure{
                    width: 70px;
                    height: 70px;
                    border-radius: 100px;
                    margin: 15px;
                    display: flex;
                    overflow: hidden;
                }
                &__profil{
                    display: flex;
                    flex-direction: column;
                    padding: 25px 0 30px 10px;
                    &__name{
                    display: flex;
                    font-size: 14pt;
                    font-weight: bolder;
                    p {
                        margin: 0;
                        padding-right: 10px;
                    }
                    }
                    &__job{
                        padding-top: 5px;
                        font-weight: light;
                        margin: 0;
                    }
                }
                
            }
            &__elements{
                padding: 40px 40px 0 40px;
                background-color: white;
                h2{
                    margin: 0;
                    padding-bottom: 20px;
                }
                &__figure {
                    width: 100%;
                    height: 250px;
                    margin: 0;
                    overflow: hidden;
                    &__img{
                        width: 100%;
                    }
                }
                &__arrow {
                    color: black;
                    font-size: 20pt;
                    margin-left: 47%;
                    margin-bottom: 15px;
                    margin-top: 15px;
                    &:hover {
                        cursor: pointer;
                        color: $couleur-primaire;
                    }
                }
            }
            &__picto {
                display: flex;
                justify-content: space-around;
                margin: 15px;
                .picto{
                    color: $couleur-tertiaire;
                    font-size: 25px;
                    cursor: pointer;
                    &:hover {
                        color: $couleur-primaire;
                    }
                }
                &__heart{
                    display: flex;
                }
                &__likes{
                   margin-top: auto;
                   margin-bottom: auto;
                   margin-left: 20px;
                }
            }
        }
    }

    .test {
        font-size: 20pt;
    }
    

    
</style>