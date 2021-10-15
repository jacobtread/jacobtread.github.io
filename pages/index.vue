<template>
  <div>
    <div class="heading">
      <div class="heading--wrapper">
        <img
          class="heading__logo"
          src="/img/jacobtread.png"
          alt="Jacobtread's Avatar"
          title="Jacobtread"
          width="379px"
          height="379px"
        />
        <h1 class="heading__title">Jacobtread</h1>
        <div class="heading__role">
          <Typer
            :values="[
              'Web',
              'Software',
              'Stonks™',
              'JS',
              'PHP',
              'Cool',
              'Bad',
              'Cheat',
              'HTML',
              'CSS',
            ]"
            :duration="2000"
            class="heading__role__prefix"
          />
          <span class="heading__role__suffix">Developer</span>
        </div>
        <Quote
          class="heading__quote"
          text="when you don't create things, you become defined by your tastes rather
        than ability. your tastes only narrow & exclude people. so create."
          author="Jonathan Gillette"
        />
      </div>
      <AbstrTop class="abstr" />
    </div>
    <About />

    <div class="divider"></div>

    <Folio :folio="folio" />

    <div class="divider"></div>

    <Socials />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Quote from "@/components/Quote.vue";
import Typer from "@/components/Typer.vue";
import AbstrTop from "@/assets/img/abstr-top.svg?inline";

import Folio from "@/components/Folio.vue";
import About from "@/components/About.vue";
import Socials from "@/components/Socials.vue";
import { Context } from "@nuxt/types";

export default Vue.extend({
  components: {
    Quote,
    Typer,
    AbstrTop,
    Folio,
    About,
    Socials,
  },
  async asyncData(context: Context) {
    const $content = context.$content;
    const folio = await $content("folio").fetch();
    return { folio: folio.values };
  },
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@import "@/assets/scss/variables.scss";

.heading {
  position: relative;
  text-align: center;
  height: 100vh;

  display: flex;
  justify-content: center;

  &--wrapper {
    opacity: 0;
    animation: title 0.5s 0.25s ease-out forwards;
    z-index: 1;
  }

  &__logo {
    margin-top: 2em;

    width: 100%;
    height: auto;

    max-width: 300px;
    max-height: 300px;

    border: 2px solid $primary;
    border-radius: 379px;

    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  }

  &__title {
    font-size: 2.5em;
    margin-top: 0.5em;
    color: $primary;
    letter-spacing: 0.1em;
    font-weight: 700;
  }

  &__role {
    display: inline-block;
    margin-top: 1.5em;

    font-size: 1.5em;
    padding: 0.5em;
    background: $background-dark;

    &__prefix {
      color: darken($primary, 5);
      font-weight: bold;
    }

    &__suffix {
      margin-left: 2px;
      color: $text-color;
    }
  }

  &__quote {
    margin: 1em auto;
  }

  .abstr {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

@keyframes title {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.divider {
  display: block;
  height: 2px;
  margin: 4em auto;
  width: 90%;
  max-width: 1200px;
  background: lighten($background, 5);
}
</style>