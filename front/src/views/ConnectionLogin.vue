<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormLogin from "@/components/FormLogin.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "ConnectionLogin",
        components: { TheHeader, FormLogin, TheFooter }
    }
</script>
<template>
    <TheHeader :IsConnected="IsConnected"/>
    <FormLogin/>
    <TheFooter/>
</template>
