<script>
    import TheHeader from "@/components/TheHeader.vue";
    import UsersPost from "@/components/UsersPost.vue";
    export default {
        name: "HomeConnected",
        components: { TheHeader, UsersPost },
        data() {
            return {
                isConnected: Boolean
            }
        }
    }
</script>   
<template>
    <TheHeader :isConnected="true"/>
    <UsersPost AllPosts()/>
</template>
