<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormLogin from "@/components/FormLogin.vue";
    export default {
        name: "ConnectionLogin",
        components: { TheHeader, FormLogin },
        data() {
            return {
                    isConnected: false   
            }
        }
    }
</script>

<template>
    <TheHeader/>
    <FormLogin/>
</template>
