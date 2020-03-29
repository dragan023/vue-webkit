<template>
  <div class="l-content">
    <aside class="l-sidebar">
      <slot name="sidebar">
        <h1>Vue webkit</h1>
      </slot>
    </aside>
    <main class="l-main">
      <slot name="main"> </slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style></style>
