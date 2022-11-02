<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormCreatePost from "@/components/FormCreatePost.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, FormCreatePost }
    }
</script>   
<template>
    <TheHeader/>
    <main class="section">
        <FormCreatePost/>
    </main>
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