<script setup lang="ts">
import MemoCardList from '@/components/memo/MemoCardList.vue'
</script>

<template>
  <g-container>
    <v-card class="pa-1">
      <v-row>
        <v-col class="ml-1 mt-1">
          <v-btn icon color="info">
            <v-icon size="large"> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat>
            <v-toolbar color="blue-lighten-4" class="pa-1">
              <span class="text-h6">リストウィンドウ</span>

              <template v-slot:extension>
                <v-text-field
                  hide-details
                  prepend-icon="mdi-magnify"
                  label="検索"
                  single-line></v-text-field>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
            <div class="pt-2">
              <memo-card-list></memo-card-list>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </g-container>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
