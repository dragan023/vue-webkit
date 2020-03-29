<template>
  <div id="app">
    <main-layout />
  </div>
</template>

<script>
import MainLayout from "./components/MainLayout";

export default {
  name: "App",
  components: { MainLayout }
};
</script>

<style lang="scss">
@import "./assets/styles/main";
</style>
