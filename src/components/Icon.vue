<template>
  <component
    fill="currentColor"
    color="currentColor"
    class="c-icon"
    :is="`${name}-icon`"
  />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
