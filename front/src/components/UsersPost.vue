<script>
    export default {
        name: "UsersPost",
        data(){
            return{
                user: {
                    firstName: "Anna",
                    lastName: "Gallet",
                    imageUrl: "../assets/testPhoto.jpeg"
                },
                post: {
                    title: "Nouvelle déco",
                    imageUrl: "../assets/test2.webp",
                    description: "Un nouveau tableau dans la salle de pose Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"
                },
                isDeployed: false  
            }
        }
    }
</script>
<template>
    <section class="UsersPosts">
        
        <article class="postOpened">
            <div class="postOpened__user">
                <figure class="postOpened__user__img">
                    <img src="{{ user.imageUrl }}"/>
                </figure>
                <p class="postOpened__user__name">{{ user.firstName }}</p>
                <p class="postOpened__user__name">{{ user.lastName }}</p>
            </div>
            <transition name="slide">
                <div v-if="isDeployed" class="postOpened__elements">
                    <h2> {{ post.title }}</h2>
                    <figure class="postOpened__elements__img">    
                        <img src="{{ post.imageUrl }}"/>
                    </figure>
                    <p>{{ post.description }}</p>
                </div>
            </transition>
            <div class="postOpened__picto">
                <i class="fa-solid fa-heart"></i>
                <router-link to="/modifyPost"><i class="fa-sharp fa-solid fa-pen"></i></router-link>
                <i class="fa-solid fa-trash"></i>
                
            </div>
            <div @click="isDeployed = !isDeployed" class="postClosed__elements__arrow">
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


    .slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

    .UsersPosts {
        display: flex;
        flex-direction: column;
        .postClosed{
            position: absolute;
            width: 60%;
            height: 490px;
            margin: 60px auto 0 20%;
            background: $couleur-secondaire;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            z-index: 2;
            &__user{
                background: white;
                border-radius: 40px 40px 0px 0px;
                box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
                z-index: 80;
                position: relative;
                display: flex;
                align-content: center;
                &__img{
                    width: 70px;
                    height: 70px;
                    background: yellow;
                    border-radius: 100px;
                    margin: 20px;
                }
                &__name{
                    margin-right: 10px;
                    margin-top: 40px;
                    font-size: 16pt;
                }
            }
            &__elements{
                padding: 40px 40px 0 40px;
                h2{
                    margin: 0;
                    padding-bottom: 20px;
                }
                &__img {
                    width: 100%;
                    height: 250px;
                    background: yellow;
                    margin: 0;
                }
                &__arrow {
                    color: black;
                    font-size: 20pt;
                    margin-left: 47%;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            
        
        }
        .postOpened{
            margin-top: 0px;
            display: flex;
            width: 60%;
            min-height: 400px;
            margin: 60px auto 0 auto;
            background: $couleur-secondaire;
            border-radius: 40px;
            border-bottom: 40px solid $couleur-secondaire;
            display: flex;
            flex-direction: column;
            z-index: 1;
            padding-bottom: 20px;
            &__user{
                background: white;
                border-radius: 40px 40px 0px 0px;
                box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
                z-index: 80;
                position: relative;
                display: flex;
                align-content: center;
                &__img{
                    width: 70px;
                    height: 70px;
                    background: yellow;
                    border-radius: 100px;
                    margin: 20px;
                }
                &__name{
                    margin-right: 10px;
                    margin-top: 40px;
                    font-size: 16pt;
                }
            }
            &__elements{
                padding: 40px 40px 0 40px;
                h2{
                    margin: 0;
                    padding-bottom: 20px;
                }
                &__img {
                    width: 100%;
                    height: 250px;
                    background: yellow;
                    margin: 0;
                }
            }
            &__picto {
                display: flex;
                justify-content: space-around;
                padding: 20px 0 40px 0;
            }
        
        }
    }
    

    
</style>