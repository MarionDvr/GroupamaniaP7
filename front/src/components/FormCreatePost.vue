<script>
    export default {
        name: "FormCreatePost",
        data() {
            return {
                CreatePost: true
            }
        }
    }
</script>
<template>
    <section>   
        <form class="form">
            <h2 v-if="CreatePost">Ajouter votre post</h2>
            <h2 v-else>Modifier votre post</h2>
            <label for="Titre" class="form__label">Titre</label>
            <input name="Titre" class="form__inputTitre"/>
            <label for="Image" class="form__label">Image</label>
            <input type="file" name="Image" class="form__inputImg"/>
            <label for="Texte" class="form__label">Texte</label>
            <input name="Texte" class="form__inputText"/>
            <button type="submit">Poster !</button>
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
        }
        &__label {
            margin-top: 30px;
        }
        &__inputTitre{
            border: solid lightgray;
        }
        &__inputText{
            min-height: 100px;
            border: solid lightgray;
        }

        
    input {
        max-width: 60%;
        height: 30px;
        margin-top: 10px;
        &:focus { 
            background-color: #FEF2F2;
        }
    }
    }

</style>