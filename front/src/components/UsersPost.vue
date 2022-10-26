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
                }
            }
        }
    }
</script>
<template>
    <section class="UsersPosts">
        <article class="postClosed">
            <div class="postClosed__user">
                <figure class="postClosed__user__img">
                    <img src="{{ user.imageUrl }}"/>
                </figure>
                <p class="postClosed__user__name">{{ user.firstName }}</p>
                <p class="postClosed__user__name">{{ user.lastName }}</p>
            </div>
            <div class="postClosed__elements">
                <h2> {{ post.title }}</h2>
                <figure class="postClosed__elements__img">    
                    <img src="{{ post.imageUrl }}"/>
                </figure>
                <a class="postClosed__elements__arrow"><i class="fa-solid fa-chevron-down"></i></a>
            </div>
        </article>
        <article class="postOpened">
            <div class="postOpened__user">
                <figure class="postOpened__user__img">
                    <img src="{{ user.imageUrl }}"/>
                </figure>
                <p class="postOpened__user__name">{{ user.firstName }}</p>
                <p class="postOpened__user__name">{{ user.lastName }}</p>
            </div>
            <div class="postOpened__elements">
                <h2> {{ post.title }}</h2>
                <figure class="postOpened__elements__img">    
                    <img src="{{ post.imageUrl }}"/>
                </figure>
                <p>{{ post.description }}</p>
            </div>
            <div class="postOpened__picto">
                <i class="fa-solid fa-heart"></i>
                <router-link to="/modifyPost"><i class="fa-sharp fa-solid fa-pen"></i></router-link>
                <i class="fa-solid fa-trash"></i>
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

@keyframes MaskPost {
    0%{
        opacity: 100%
    }
    100%{
        opacity: 0%;
        visibility: hidden;
    }

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
            &:active{
                        animation: MaskPost 500ms ;
                    }
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
            height: 400px;
            overflow: hidden;
            margin: 60px auto 0 auto;
            background: $couleur-secondaire;
            border-radius: 40px;
            border-bottom: 40px solid $couleur-secondaire;
            display: flex;
            flex-direction: column;
            z-index: 1;
            padding-bottom: 20px;
            &:hover{
                        animation: MaskPost 500ms forwards ease-in reverse;
                    }
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