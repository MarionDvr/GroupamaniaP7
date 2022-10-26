<script>
    import TheHeader from "@/components/TheHeader.vue";
    export default {
        name: "HomeConnexion",
        components: { TheHeader }
    }
</script>   
<template>
    <TheHeader/>
    <main>
        <section class="connexionSection">
            <figure class="connexionSection__logo">
                <img src="../assets/logoConnexion.svg" alt="Logo Groupamania"/>
            </figure>
            <div class="connexionSection__title">
                <h1>Bienvenue sur l'intranet de Groupamania !</h1>
                <h2>Partager avec vos collègues</h2>
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

        

        /* main */

        .connexionSection {
        display: flex;
        flex-wrap: wrap;
        padding: 5% 0% 10% 3%;
        height: 100%;
        width: 100%;
        background: $background-grey;
        margin: 0;
        &__logo {
            width: 35%;
        }
        &__title {
            margin-top: 10%;
            margin-bottom: auto;
            h1 {
                background: $couleur-primaire;
                color: white;
                padding: 30px 50px 30px 50px;
                font-size: 160%;
                margin-bottom: 0;
                z-index: 1;
            }
            h2 {
                background: white;
                margin: -15px 25% 0 25%;
                font-size: 120%;
                padding: 20px;
                text-align: center;
                width: 40%;
                display: flex;
                position: relative;
                z-index: 3;
                box-shadow: 3px 2px 9px 1px #847F7F;
            }
        }
        
        }
    @media screen and (max-width: 1000px) /* Petit écran - Tablette */
    {
        .connexionSection {
            &__logo {
                display:none;
            }
            &__title {
                margin: auto;
            }
        }
    }

    @media screen and (max-width: 768px) /* Smartphone */
    {
        .connexionSection {
            padding:0;
            &__title {
                h1 {
                    width: 80%;
                    margin-right: auto;
                    margin-left: auto;
                    font-size: 20pt;
                    padding: 25px;
                }
                h2 {
                    padding: 15px;
                }
            }
        } 
    }
</style>