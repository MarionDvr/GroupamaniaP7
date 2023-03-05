<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormSignin from "@/components/FormSignin.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "ConnectionSignin",
        props: {
            IsConnected: {
                type: Boolean,
                default: false
            }
        },
        components: { TheHeader, FormSignin, TheFooter }
    }
</script>
<template>
    <TheHeader :IsConnected="IsConnected"/>
    <FormSignin/>
    <TheFooter/>
</template>

