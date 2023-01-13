<script>
  export default {
    name: "App"
  };
</script>

<template>
  <div id="app" class="app wrap">
    <router-view/>
  </div>
</template>
<style lang="scss">
  .wrap {
            max-width: 1500px;
            margin-left: auto;
            margin-right: auto;
        }
</style>
