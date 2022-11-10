<script>
    import TheHeader from "@/components/TheHeader.vue";
    import UsersPost from "@/components/UsersPost.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, UsersPost }
    }
</script>   
<template>
    <TheHeader/>
    <main>
        <UsersPost/>
    </main>
</template>
<style lang="scss">
    $couleur-primaire: #FD2D01;
    $couleur-secondaire: #FFD7D7;
    $couleur-tertiaire: #4E5166;
    $couleur-header: white;
    $background-grey:#F2F1F0;

    main {
        background: $background-grey;

    }

</style>