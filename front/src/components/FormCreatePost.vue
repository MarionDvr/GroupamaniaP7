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
                file: "",
            }
        },
        methods: {
            addPost() {
                let date = new Date().toLocaleDateString("fr");
                //Si il n'y a pas de titre
                if(this.dataPost.title == ""){
                    alert("Veuillez ajouter un titre");
                }
                //Si il n'y a pas de texte
                if(this.dataPost.text == ""){
                    alert("Veuillez ajouter un texte");
                }
                //Si il n'y a pas d'image
                if(this.file == ""){
                    const formData = new FormData();
                    formData.append('userId', this.userId);
                    formData.append('title', this.dataPost.title);
                    formData.append('text', this.dataPost.text);
                    formData.append('date', date);

                    axios.post("http://localhost:3000/api/posts", formData, {
                        headers: {
                            "Authorization": "Bearer " + this.token,
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        console.log('Post ajouté');
                        this.$router.push("/homeConnected");
                    })
                    .catch(function(erreur) {
                        console.error('Une erreur est survenue' + erreur.response);
                    });
                } else {
                    const formData = new FormData();
                    formData.append('image', this.file);
                    formData.append('userId', this.userId);
                    formData.append('title', this.dataPost.title);
                    formData.append('text', this.dataPost.text);
                    formData.append('date', date);

                    axios.post("http://localhost:3000/api/posts", formData, {
                        headers: {
                            "Authorization": "Bearer " + this.token,
                            "Content-Type": "multipart/form-data",
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        console.log('Post ajouté');
                        this.$router.push({ path: 'homeConnected' });
                    })
                    .catch(function(erreur) {
                        console.error('Une erreur est survenue' + erreur.response);
                    });
                }
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
    <main>
        <section>   
            <form class="form">
                <h1>Ajouter votre post</h1>
                <label for="Titre" class="form__label">Titre</label>
                <input name="Titre" class="form__inputTitre" v-model="dataPost.title"/>
                <label for="file" class="form__label">Image</label>
                <input type="file" ref="file" name="file" id="file" class="form__inputImg" @change="selectImage()" aria-label="Selection de l'image"/>
                <!-- pour voir le rendu image avant l'envoie du nouveau post -->
                <img v-show="imagePreview" :src="imagePreview" class="publication-photo" alt="Prévisualisation de l'image" />
                <label for="Text" class="form__label">Texte</label>
                <textarea name="Text" class="form__inputText" v-model="dataPost.text"></textarea>
                <button type="submit" @click="addPost()">Poster !</button>
            </form>
        </section>
    </main>
</template>
<style lang="scss">
    @import "_variables.scss"; 

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
    @media screen and (max-width: 768px) /* Smartphone */
    { 
        button {
            margin-left: 0;
            max-width: 85%;
        }
    }

</style>