<script>
    import axios from "axios"
    export default {
        name: "FormCreatePost",
        data() {
            return {
                CreatePost: true,
                dataPost: {
                    title: "",
                    text: "",
                    //imageUrl:""
                },
                token: localStorage.getItem('token')
            }
        },
        methods: {
            AddPost() {
                axios.post("http://localhost:3000/api/posts",
                {
                   headers: {
                        "Authorization": "Bearer" + this.token,
                        "Content-Type": "application/json",
                    },
                    post: {
                        title: this.dataPost.title,
                        text: this.dataPost.text,
                        //imageUrl: this.dataPost.imageUrl
                    }
                })
                .then((response) => {
                    console.log(response)
                    console.log('Post ajouté')
                    //this.$router.push("/homeConnected");
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            ModifyPost() {
                axios.put("http://localhost:3000/api/posts/:id",
                {
                    post: {
                        title: this.dataPost.title,
                        text: this.dataPost.text,
                        //imageUrl: this.dataPost.imageUrl
                    }
                })
                .then((response) => {
                    console.log(response)
                    this.$router.push("/homeConnected");
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            /*onFileChange(e) {
                let files = e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            }*/
        }
    }
</script>
<template>
    <section>   
        <form class="form">
            <h2 v-if="!CreatePost">Modifier votre post</h2>
            <h2 v-else>Ajouter votre post</h2>
            <label for="Titre" class="form__label">Titre</label>
            <input name="Titre" class="form__inputTitre" v-model="dataPost.title"/>
            <label for="Image" class="form__label">Image</label>
            <!-- V-model ? -->
            <input type="file" name="Image" class="form__inputImg" v-on:change="onFileChange()"/>
            <label for="Texte" class="form__label">Texte</label>
            <textarea name="Texte" class="form__inputText" v-model="dataPost.text"></textarea>
            <button type="submit" v-if="CreatePost" @click="AddPost()">Poster !</button>
            <button type="submit" v-else @click="ModifyPost()">Modifier !</button>
        </form>
    </section>
</template>
<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    section {
        position: relative;
        z-index: 1;
        padding-bottom: 150px;
        padding-top: 40px;
        margin-top: 0;
    }
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
        position:relative;
        z-index: 2;
        h2 {
            padding: 0;
            margin: 0;
            margin-left: 10px;
        }
        &__label {
            margin-top: 30px;
            margin-left: 10px;
        }
        &__inputTitre{
            height: 35px;
            border: none;
            margin-top: 10px;
            margin-bottom: 15px;
            background: #FFFFFF;
            box-shadow: 2px 2px 7px 1px #D8D3D3 inset;
        }
        &__inputText{
            min-height: 100px;
            border: none;
            width: 90%;
            margin-top: 10px;
            margin-bottom: 25px;
            background: #FFFFFF;
            box-shadow: 2px 2px 7px 1px #D8D3D3 inset;
            overflow: scroll;
            resize: none;
        }

        
    input, textarea {
        max-width: 90%;
        height: 30px;
        margin-top: 10px;
        margin-left: 10px;
        &:focus-visible { 
            outline-color: $couleur-primaire;
        }
    }
    }
    button {
        margin-left: 10px;
    }

</style>