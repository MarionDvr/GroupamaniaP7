<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormCreatePost from "@/components/FormCreatePost.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "ConnectionLogin",
        components: { TheHeader, FormCreatePost, TheFooter }
    }
</script>
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <FormCreatePost/>
    <TheFooter/>
    
</template>
<style lang="scss">
    @import "_variables.scss"; 

    main {
        background: $background-grey;
    }
</style>