<script>
    import TheHeader from "@/components/TheHeader.vue";
    import UsersPost from "@/components/UsersPost.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, UsersPost }
    }
</script>   
<template>
    <TheHeader :IsConnected="!IsConnected"/>
    <UsersPost/>
</template>
