<script>
import axios from 'axios';

    export default {
        name: "UsersPost",
        data(){
            return{
                IsConnected: true,
                content: "",
                userId: localStorage.getItem("userId"),
                //token: localStorage.getItem("token"),
                //Mettre les utilisateurs dans un tableau
                users: [],
                user: {
                    id: localStorage.getItem("userId")
                },
                //Mettre les info d'un post dans un objet
                post: {},
                //Mettre les posts récupérer dans un tableau
                posts: [],
                //Pour que la flèche d'ouverture du post soit fermé
                isDeployed: false  
            }
        },
        methods: {
            //Récupérer les utilisateurs
            /*User() {
                axios.get("http://localhost:3000/api/auth/users", {
                    headers: {
                            Authorization: "Bearer " + this.token,
                            "Content-Type": "application/json",
                        },
                })
                .then((response) => {
                    this.users = response.data.users;
                    console.log(this.users);
                })
                .catch((error) => { console.log(error)});
            },*/
            //Récupérer les posts
            GetAllPosts() {
                //erreur 403 l'utilisateur n'est pas autorisé 
                axios.get("http://localhost:3000/api/posts",
                {
                    headers: {
                            "Authorization": "Bearer" + this.token,
                            "Content-Type": "application/json",
                        },
                })
                .then((response) => {
                    for(let post of response.data) {
                        this.post.push(post);
                        console.log(this.posts);
                        console.log("Récupération des posts");
                    }
                    
                })
                .catch((error) => { console.log(error)});
            },
            
            deletePost() {
                let confirmDeletePost = confirm(
                    "Êtes-vous sûr de vouloir supprimer ce post ?"
                );
                if (confirmDeletePost == true) {
                    axios.delete(`http://localhost:3000/api/posts/:id`, {
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
                axios.post(`http://localhost:3000/api/posts/:id/like` , {
                    headers: {
                            Authorization: "Bearer " + this.token,
                        }
                })
                .then(() => {
                    window.location.reload();
                })
                .catch( error => { console.log(error)});
            }

            
        }
        
    }
</script>
<template>
    <section class="UsersPosts">
        <button type="submit" @click="GetAllPosts()"> ici </button>
        <article v-for="post in posts" :key="post.id" class="post">
            <div class="post__user">
                <figure class="post__user__figure">
                    <img v-if="user.imageUrl === null" src="../assets/PhotoUserDefault.jpeg" class="post__user__figure__img" alt="Photo de l'utilisateur"/>
                    <img v-else :src="user.imageUrl" class="post__user__figure__img" alt="Photo de l'utilisateur"/>
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
                <figure class="post__elements__figure">    
                    <img :src="post.imageUrl" class="post__elements__figure__img" alt="Photo du post"/>
                </figure>
                <p v-if="isDeployed" >{{ post.text }}</p>
                </div>
            <div class="post__picto" v-if="isDeployed">
                <i class="fa-solid fa-heart picto" @click="likePost()"></i>
                <p class="post_picto_likes">{{ post.likes }}</p>
                <router-link to="/modifyPost"><i class="fa-sharp fa-solid fa-pen picto"></i></router-link>
                <i class="fa-solid fa-trash picto" @click="deletePost()"></i>
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
            }
        }
    }
    

    
</style>