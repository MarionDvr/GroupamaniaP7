<script>
    import axios from "axios"
    export default {
        name: "FormCreatePost",
        data() {
            return {
                IsConnected: true,
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId'),
                dataPost: {
                    title: "",
                    text: ""
                },
                imagePreview: "",
                file: ""
            }
        },
        methods: {
            addPost() {
                let date = new Date().toLocaleDateString("fr");
                let post = {
                    userId: this.userId,
                    title: this.dataPost.title,
                    text: this.dataPost.text,
                    imageUrl: this.file,
                    date: date,
                };

                //Si le post est vide
               /* if(post == ""){
                    alert("Veuillez ajouter un titre et un texte");
                //Si l'image est vide
                } else {*/
                    axios.post("http://localhost:3000/api/posts", post, {
                        headers: {
                        "Authorization": "Bearer " + this.token,
                        "Content-Type": "application/json"
                    }
                    })
                    .then((response) => {
                        console.log(response);
                        console.log('Post ajouté');
                        console.log(post)
                        //this.$router.push("/homeConnected");
                    })
                    .catch(function(erreur) {
                        console.error('Une erreur est survenue' + erreur.response);
                        console.log(post);
                    });
                //}
            },
            selectImage() {
                //Récupère le fichier grâce à ref
                this.file = this.$refs.file.files[0];
                this.imagePreview = URL.createObjectURL(this.file);
            },
        }
    }
</script>
<template>
    <section>   
        <form class="form">
            <h2>Ajouter votre post</h2>
            <label for="Titre" class="form__label">Titre</label>
            <input name="Titre" class="form__inputTitre" v-model="dataPost.title"/>
            <label for="file" class="form__label">Image</label>
            <!--<input type="file" @change="selectFile" ref="fileUpload" class="form__inputImg" id="file" name="Image" accept=".jpg, .jpeg, .gif, .png" />-->
            <input type="file" ref="file" name="file" id="file" accept=".jpg, .jpeg, .gif, .png" class="form__inputImg" v-on:change="selectImage()" aria-label="Selection de l'image"/>
            <!-- pour voir le rendu avant l'envoie du nouveau post -->
            <img v-show="imagePreview" :src="imagePreview" class="publication-photo" alt="Prévisualisation de l'image" />
            <label for="Texte" class="form__label">Texte</label>
            <textarea name="Texte" class="form__inputText" v-model="dataPost.text"></textarea>
            <button type="submit" @click="addPost()">Poster !</button>
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