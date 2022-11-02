<script>
    import TheHeader from "@/components/TheHeader.vue";
    import FormSignin from "@/components/FormSignin.vue";
    export default {
        name: "ConnectionLogin",
        components: { TheHeader, FormSignin },
        data() {
            return {
                    isConnected: false   
            }
        }
    }
</script>

<template>
    <TheHeader/>
    <FormSignin/>
</template>

