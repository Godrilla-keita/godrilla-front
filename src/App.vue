<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-card flat> メモアプリ（仮） </v-card>
    </v-navigation-drawer>

    <v-app-bar color="primary" app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>メモアプリ（仮）</v-app-bar-title>

      <template v-slot:append>
        <v-btn>
          <v-icon>mdi-logout</v-icon>
          <span v-if="$vuetify.display.smAndUp">ログアウト</span>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
