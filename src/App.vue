<template>
  <div id="app">
    <main-layout>
      <template slot="aside">
        <div class="l-aside__head">
          <icon name="home" />
          <h1 class="u-ml-sm">Vue webkit</h1>
        </div>
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout';
import Icon from './components/Icon';

export default {
  name: 'App',
  components: { MainLayout, Icon }
};
</script>

<style lang="scss">
@import './assets/styles/main';
</style>
