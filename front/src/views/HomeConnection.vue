<script>
    import TheHeader from "@/components/TheHeader.vue";
    export default {
        name: "HomeConnexion",
        components: { TheHeader }
    }
</script>   
<template>
    <TheHeader  :IsConnected="IsConnected"/>
    <main id="main">
        <section class="connexionSection">
            <div class="connexionSectionBefor">
                <img class="connexionSectionBefor__Forme1" src="../assets/logoConnexion.svg" alt="Logo Groupamania"/>
                <img class="connexionSectionBefor__Forme2" src="../assets/logoConnexion.svg" alt="Logo Groupamania"/>
            </div>
            <div class="connexionSectionAfter">
                <div class="connexionSectionAfter__title">
                    <h1>Bienvenue sur l'intranet de Groupamania !</h1>
                    <h2>Votre réseau social d'entreprise</h2>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        $couleur-primaire: #FD2D01;
        $couleur-secondaire: #FFD7D7;
        $couleur-tertiaire: #4E5166;
        $couleur-header: white;
        $background-grey:#F2F1F0;

        body {
        font-family: Lato;
        color: $couleur-tertiaire;
        margin: 0;
        }
@keyframes Forme1 {
    0% {
        opacity: 1;
        transform: translateX(0%);
	}
    100%{
        opacity: 1;
        transform: rotateY(180deg);
        transform-style: preserve-3d;
    }
}
@keyframes Forme2 {
    0% {
        opacity: 1;
        transform: translateX(0%);
	}
    100%{
        opacity: 1;
        transform: translateX(-45%);
    }
}
@keyframes Forme2_Tablette {
    0% {
        opacity: 1;
        transform: translateX(0%);
    }
    100%{
        opacity: 1;
        transform: translateX(-40%);
    }
}
@keyframes Forme2_Phone {
    0% {
        opacity: 1;
        transform: translateX(0%);
    }
    100%{
        opacity: 1;
        transform: translateX(-70%);
    }
}
@keyframes Textes {
    0%{
        opacity: 0;
        transform: translateX(0%);
    }
    45%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: translateX(120%);
    }
}
@keyframes Textes_Tablette {
    0%{
        opacity: 0;
        transform: translateX(0%);
    }
    45%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: translateX(170%);
    }
}
@keyframes Textes_Phone {
    0%{
        opacity: 0;
        transform: translateX(0%);
    }
    45%{
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: translateX(200%);
    }
}

        

        /* main */
        #main {
            background: none;
        }
        .connexionSection {
            background-image: url('../assets/HalfLogo.svg');
            background-repeat: no-repeat;
            background-size: 100%;
            position: relative;
            z-index:90;
            display: flex;
            .connexionSectionBefor {
                position:relative;
                z-index: 99;
                margin-left: 30%;
                &__Forme1 {
                    opacity: 0;
                    width: 500px;
                    perspective: 1000px;
                    transform-origin: 50%;
                    animation: Forme1 1000ms infinite ease-in-out alternate;
                    animation-iteration-count: 2;
                }
                &__Forme2 {
                    width: 500px;
                    opacity:0;
                    margin-left: -500px;
                    animation: Forme2 1000ms ease-in-out forwards;
                    animation-delay: 1.95s;
                }
            }
        
            .connexionSectionAfter {
                position:relative;
                z-index: 2;
                display: flex;
                flex-wrap: wrap;
                padding: 5% 0% 10% 3%;
                margin: 0;
                &__title {
                    margin-top: 100px;
                    margin-bottom: auto;
                    margin-left: -800px;
                    h1 {
                        opacity: 0;
                        color: $couleur-primaire;
                        font-size: 160%;
                        z-index: 1;
                        animation: Textes 500ms ease-in-out forwards;
                        animation-delay: 2700ms;
                        padding-right: 3%;
                    }
                    h2 {
                        opacity: 0;
                        font-size: 120%;
                        animation: Textes 500ms ease-in-out forwards;
                        animation-delay: 3000ms;
                        padding-right: 3%;
                    }
                }
                
            }

        }
        
    @media screen and (max-width: 1000px) /* Petit écran - Tablette */
    {
        .connexionSection {
            .connexionSectionBefor {
                &__Forme1 {
                    width: 450px;
                    animation: Forme1 1000ms infinite ease-in-out alternate;
                    animation-iteration-count: 2;
                }
                &__Forme2 {
                    width: 450px;
                    animation: Forme2_Tablette 1000ms ease-in-out forwards;
                    animation-delay: 2s;
                }
            }
        .connexionSectionAfter{
                &__title {
                    max-width: 350px;
                    h1{
                        animation: Textes_Tablette 500ms ease-in-out forwards;
                        animation-delay: 2.5s;
                    }
                    h2{
                        animation: Textes_Tablette 500ms ease-in-out forwards;
                        animation-delay: 3s;
                    }
                    
                }
            }
        }

    }
        

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .connexionSection {
            .connexionSectionBefor {
                &__Forme1 {
                    width: 250px;
                    animation: Forme1 1000ms infinite ease-in-out alternate;
                    animation-iteration-count: 2;
                }
                &__Forme2 {
                    width: 250px;
                    animation: Forme2_Phone 1000ms ease-in-out forwards;
                    animation-delay: 2s;
                    margin-left: -250px;
                }
            }
        .connexionSectionAfter{
                &__title {
                    max-width: 300px;
                    font-size: 15px;
                    margin-top: 30px;
                    h1{
                        animation: Textes_Phone 500ms ease-in-out forwards;
                        animation-delay: 2.5s;
                    }
                    h2{
                        animation: Textes_Phone 500ms ease-in-out forwards;
                        animation-delay: 3s;
                    }
                    
                }
            }
        }
    }
</style>