<script>
    import TheHeader from "@/components/TheHeader.vue";
    import UsersPost from "@/components/UsersPost.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, UsersPost, TheFooter }
    }
</script>   
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <UsersPost/>
    <TheFooter/>
</template>
