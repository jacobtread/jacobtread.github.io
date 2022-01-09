<template>
  <div class="about block">
    <AbstrBottom class="abstr" />
    <h1 class="block__title">About Me</h1>
    <p class="block__text">
      I am a small time developer from 🥝 New Zealand with a lot of free time on
      my hands. I spent my days developing web applications mostly 🕹️ Dashboards
      and similar applications. But I do occasionally dip my feet into the world
      desktop applications with
      <KotlinIcon class="icon--inline" /> Kotlin and Java. But I do perfer to
      use Web techologies such as
      <TypeScriptIcon class="icon--inline" /> Typescript and
      <VueJSIcon class="icon--inline" /> VueJS. I've also recently been using
      <GoIcon class="icon--inline" style="width: 2em;"/> and have been really enjoying using it
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TypeScriptIcon from "@/assets/icons/typescript.svg?inline";
import VueJSIcon from "@/assets/icons/vuejs.svg?inline";
import KotlinIcon from "@/assets/icons/kotlin.svg?inline";
import AbstrBottom from "@/assets/img/abstr-bottom.svg?inline";
import GoIcon from "@/assets/icons/go.svg?inline";

export default Vue.extend({
  components: { TypeScriptIcon, VueJSIcon, KotlinIcon, AbstrBottom, GoIcon },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.abstr {
  transform: translateY(-8px);
}
</style>