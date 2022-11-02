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
        
        <article class="post">
            <div class="post__user">
                <figure class="post__user__img">
                    <img src="{{ user.imageUrl }}"/>
                </figure>
                <p class="post__user__name">{{ user.firstName }}</p>
                <p class="post__user__name">{{ user.lastName }}</p>
            </div>
            <div class="post__elements">
                <h2> {{ post.title }}</h2>
                <figure class="post__elements__img">    
                    <img src="{{ post.imageUrl }}"/>
                </figure>
                <p v-if="isDeployed" >{{ post.description }}</p>
                </div>
            <div class="post__picto" v-if="isDeployed">
                <i class="fa-solid fa-heart picto"></i>
                <router-link to="/modifyPost"><i class="fa-sharp fa-solid fa-pen picto"></i></router-link>
                <i class="fa-solid fa-trash picto"></i>
                
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


    .UsersPosts {
        display: flex;
        flex-direction: column;
        .post{
            position: absolute;
            width: 60%;
            min-height: 250px;
            margin: 60px auto 0 20%;
            background: $couleur-secondaire;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            z-index: 2;
            &__user{
                background: $background-grey;
                border-radius: 40px 40px 0px 0px;
                box-shadow: 0px 6px 10px -7px rgb(151, 150, 150);
                height: 100px;
                z-index: 80;
                position: relative;
                display: flex;
                &__img{
                    width: 70px;
                    height: 70px;
                    background: yellow;
                    border-radius: 100px;
                    margin: 15px;
                }
                &__name{
                    padding-right: 10px;
                    padding-top: 20px;
                    font-size: 14pt;
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