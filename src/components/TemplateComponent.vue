<script setup lang="ts">
withDefaults(
  defineProps<{
    msg?: string
  }>(),
  {
    msg: 'hello',
  }
)
</script>

<template>
  <div></div>
</template>

<style scoped></style>
