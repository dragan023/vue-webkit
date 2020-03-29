<template>
  <div class="l-content">
    <aside class="l-sidebar">
      <slot name="aside"></slot>
    </aside>
    <main class="l-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
};
</script>

<style></style>
