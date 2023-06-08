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
  <v-card> おれはListなんだ...誰が何と言おうとListなんだ... </v-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
