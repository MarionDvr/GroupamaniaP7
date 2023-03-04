<script>
    import axios from "axios"
    export default {
        name: "FormModifyPost",
        data() {
            return {
                IsConnected: true,
                showInputTitle: false,
                showInputImage: false,
                showInputText: false,
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId'),
                postId: localStorage.getItem('postId'),
                dataPost: {
                    title: "",
                    text: "",
                },
                post: {},
                imagePreview: "",
                file: "",
                
            }
        },
        mounted (){
            this.GetOnePost()
        },
        methods: {
            //Récupérer le post
            GetOnePost() {
                axios.get(`http://localhost:3000/api/posts/` + this.postId,
                {
                    headers: {
                            "Authorization": "Bearer " + this.token,
                            "Content-Type": "multipart/form-data",
                        }
                })
                .then((response) => {
                    this.post = response.data;
                    console.log("Post récupéré")
                })
                .catch((error) => { console.log(error)});
            },
            //Modifier le post
            ModifyPost() {
                const formData = new FormData();
                formData.append('userId', this.userId);
                //Si il y a modification du titre
                if(this.dataPost.title !== "") {
                    formData.append('title', this.dataPost.title);
                }
                //Si il y a modification du text
                if(this.dataPost.text !== "") {
                    formData.append('text', this.dataPost.text);
                }
                //Si il y a modification de l'image
                if(this.file !== "") {
                    formData.append('image', this.file);
                }
                axios.put("http://localhost:3000/api/posts/" + this.postId, formData,
                {
                    headers: {
                        'Authorization': "Bearer " + this.token,
                        "Content-Type": "multipart/form-data",
                    }
                })
                .then((response) => {
                    console.log(response);
                    console.log('Post modifié!');
                    this.$router.push({ path: 'homeConnected' });
                })
                .catch(function(erreur) {
                    console.error('Une erreur est survenue' + erreur);
                });
            },
            selectImage() {
                //Récupère le fichier grâce à ref
                this.file = this.$refs.file.files[0];
                //Création d'une url pour afficher l'image
                this.imagePreview = URL.createObjectURL(this.file);
            },
            
        }
    }
</script>
<template>
    <main class="main">
        <section>   
            <form class="form">
                <h1>Modifier votre post</h1>
                <label for="Titre" class="form__label">Titre</label>
                <h3 v-if="!showInputTitle"> {{ post.title }}</h3>
                <button @click="showInputTitle = !showInputTitle" v-if="!showInputTitle">Modifier le titre</button>
                <input v-if="showInputTitle" name="Titre" class="form__inputTitre" v-model="dataPost.title"/>
                <label for="Image" class="form__label">Image</label>
                <img :src="post.imageUrl" v-if="!showInputImage"/>
                <!-- pour voir le rendu avant l'envoie du nouveau post -->
                <img v-show="imagePreview" :src="imagePreview" class="publication-photo" alt="Prévisualisation de l'image"/>
                <button @click="showInputImage = !showInputImage" v-if="!showInputImage">Modifier l'image</button>
                <input v-if="showInputImage" type="file" ref="file" name="file" id="file" class="form__inputImg" v-on:change="selectImage()" aria-label="Selection de l'image"/>
                <label for="Texte" class="form__label">Texte</label>
                <p v-if="!showInputText"> {{ post.text }}</p>
                <button @click="showInputText = !showInputText" v-if="!showInputText">Modifier le texte</button>
                <textarea v-if="showInputText" name="Texte" class="form__inputText" v-model="dataPost.text"></textarea>
                <button type="button" @click="ModifyPost()">Modifier !</button>
            </form>
        </section>
    </main>
</template>
<style lang="scss">
    @import "../assets/sass/_variables.scss";

    .main {
        background: $background-grey;
    }

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
        &__button {
            background: $couleur-secondaire;
            color: $couleur-tertiaire;
            font-size: 14pt;
            border: none;
            padding: 10px;
            margin-left: 10px;
            margin-top: 20px;
            width: 190px;
            box-shadow: 3px 2px 9px 1px #CAC3C3;
            display: flex;
            justify-content: center;
            cursor: pointer;
            &:hover{
                background: $couleur-primaire;
            }
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