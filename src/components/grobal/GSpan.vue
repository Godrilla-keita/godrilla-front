<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    text?: string
    bold?: boolean
  }>(),
  {
    text: '',
    bold: false,
  }
)
const lines = computed(() => props.text.split('\n'))
const classText = computed(() => (props.bold ? 'font-weight-bold' : ''))
</script>

<template>
  <span v-for="(line, i) of lines" :key="i" :class="classText">
    <span v-text="line"></span><br />
  </span>
</template>

<style scoped></style>
