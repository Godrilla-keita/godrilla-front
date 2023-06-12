<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const style = computed(() => {
  let width = '100px'
  let addition = ''
  if (display.xs.value) {
    width = '100%'
    addition = ''
  } else if (display.sm.value) {
    width = '100%'
    addition = ''
  } else if (display.md.value) {
    width = '960px'
    addition = ''
  } else if (display.lg.value) {
    width = '1080px'
  } else if (display.xl.value) {
    width = '1280px'
  } else if (display.xxl.value) {
    width = '1440px'
  }
  return `
width: ${width};
${addition}
  `
})

const imgStyle = ref('')

const calc = () => {
  if (window.innerWidth / window.innerHeight > 16 / 9) {
    imgStyle.value = `
      width: ${window.innerWidth}px;
      height: auto;
  `
  } else {
    imgStyle.value = `
      width: auto;
      height: ${window.innerHeight}px;
  `
  }
}

watch(display.height, calc)
watch(display.width, calc)

onMounted(() => {
  calc()
})
</script>

<template>
  <img
    class="bg"
    :src="'/godrilla-front/mock/bg.jpg'"
    contain
    :style="imgStyle" />
  <div class="d-flex jsutify-center wrapper">
    <div :style="style" class="wrrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.bg {
  position: fixed;
  z-index: 0;
  opacity: 0.65;
}

.wrrapper {
  margin: 0 auto;
  z-index: 1;
}
</style>
