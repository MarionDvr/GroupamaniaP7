<script>
    export default {
        name: "BaseButton"
    }
</script>
<template>  
    <button></button>
</template>
<style lang="scss">

    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    

    button {
        background-color: $couleur-secondaire;
        color: $couleur-tertiaire;
        padding: 15px 25px 15px 25px;
        border: none;
        box-shadow: 2px 3px 4px #d6d6d6;
        font-size: 18px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 30px;
        width: 160px;
    }
</style>