<script>
    export default {
        name: "TheFooter"
    }
</script>
<template>
    <footer>
        <i class="fa-brands fa-twitter pictoFooter" aria-label="Lien vers twitter"></i>
        <i class="fa-brands fa-instagram pictoFooter" aria-label="Lien vers instagram"></i>
        <i class="fa-brands fa-facebook pictoFooter" aria-label="Lien vers facebook"></i>
    </footer>
</template>
<style lang="scss">
    @import "../assets/sass/_variables.scss"; 
    
    footer {
        background: $couleur-tertiaire;
        margin: 0;
        padding: 50px 200px 60px 200px;
        display: flex;
        justify-content: space-around;
    }

    .pictoFooter {
        color: $couleur-header;
        font-size: 30px;
        cursor: pointer;
        &:hover {
            color: $couleur-secondaire;
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        footer {
            padding: 40px 80px 40px 80px;
        }

    }
</style>