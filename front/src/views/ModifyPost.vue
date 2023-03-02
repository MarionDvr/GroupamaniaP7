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
    <FormModifyPost/>
    <TheFooter/>
</template>