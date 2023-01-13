<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormSignin from "@/components/FormSignin.vue";
    import TheFooter from "@/components/TheFooter.vue";
    export default {
        name: "ConnectionSignin",
        components: { TheHeader, FormSignin, TheFooter }
    }
</script>

<template>
    <TheHeader/>
    <FormSignin/>
    <TheFooter/>
</template>

