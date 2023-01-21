<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormModifyPost from "@/components/FormModifyPost.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, FormModifyPost, TheFooter }
    }
</script>   
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <main class="section">
        <FormModifyPost/>
    </main>
    <TheFooter/>
</template>
<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    .section {
        background: $background-grey;
    }

</style>