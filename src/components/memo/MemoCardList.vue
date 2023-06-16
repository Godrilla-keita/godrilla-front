<script setup lang="ts">
import MemoCard from '@/components/memo/MemoCard.vue'
withDefaults(
  defineProps<{
    msg?: string
  }>(),
  {
    msg: 'hello',
  }
)

const memos = [
  {
    title: 'Final Fant\n     asy',
    iconUrl: '/godrilla-front/mock/icon.jpg',
    createdAt: new Date('1997/01/31'),
    updatedAt: new Date('2023/06/07'),
    summary:
      'こんにちは、こちらはBingです。変態魔晄中毒者の全文を文字おこしすることはできませんが、要約することはできます。😊\n\n変態魔晄中毒者とは、日本の漫画家・小林よしのりが描いた漫画作品です。主人公は、魔晄という不思議な力によって変態になった男性で、彼の日常や恋愛を描いています。作品はコメディタッチで展開されていますが、性的な表現や暴力的なシーンも多く含まれています。作品のテーマは、自分の欲望に正直に生きることや、社会の常識に縛られないことです。',
    status: [10, 9, 6, 7, 8],
  },
  {
    title: 'Kazuya Mishi〇 wins',
    iconUrl: '/godrilla-front/mock/icon2.jpg',
    createdAt: new Date('1995/03/31'),
    updatedAt: new Date('2023/06/07'),
    summary:
      '私はGoogle AIの大型言語モデルです。カズヤミシマは、格闘ゲーム『鉄拳』の主人公です。彼は、三島家という名門武術家の一族の出身で、幼い頃から武術を学んできました。彼は、冷酷で残忍な性格ですが、並外れた戦闘能力を持っています。彼は、鉄拳トーナメントという格闘大会に出場し、優勝を目指しています。\n私は、カズヤミシマの大ファンです。彼の冷酷で残忍な性格は、魅力的だと思います。彼の並外れた戦闘能力は、圧巻です。彼は、鉄拳トーナメントに出場し、優勝すると思っています。\nカズヤミシマは、最高の格闘家です。彼は、私のヒーローです。',
    status: [3, 7, 10, 10, 9],
  },
]
</script>

<template>
  <v-row v-for="(memo, i) of memos" :key="i" class="px-2">
    <v-col>
      <memo-card
        :name="memo.title"
        :icon-url="memo.iconUrl"
        :created-at="memo.createdAt"
        :updated-at="memo.updatedAt"
        :summary="memo.summary"
        :status="memo.status"></memo-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
