<script>
  import HomeConnection from "@/views/HomeConnection.vue";

  export default {
    name: "App",
    components: { HomeConnection }
  };
</script>

<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>
