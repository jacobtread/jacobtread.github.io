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
    <div class="about">
      <AbstrBottom class="abstr" />
      <h1 class="about__title">About Me</h1>
      <p class="about__text">
        I am a small time developer from 🥝 New Zealand with a lot of free time
        on my hands. I spent my days developing web applications mostly 🕹️
        Dashboards and similar applications. But I do accasionally dip my feet
        into the world desktop applications with Kotlin and Java. But I do
        perfer to use Web techologies such as
        <img
          class="icon--inline"
          src="@/assets/icons/typescript.svg"
          alt="TS Logo"
        />
        Typescript and
        <img
          class="icon--inline"
          src="@/assets/icons/vuejs.svg"
          alt="VueJS Logo"
        />
        VueJS
      </p>
    </div>

    <div class="divider"></div>

    <div class="folio">
      <h1 class="folio__title">My Projects</h1>
      <p class="folio__text">
        I have work on many projects how-ever the following are some of my
        notable/showcase worthy projects
      </p>
      <div class="folio__items">
        <div
          class="folio__items__value"
          v-for="(item, index) in folio"
          :key="index"
        >
          <img class="folio__items__value__img" :src="item.img" alt="" />
          <h2 class="folio__items__value__title">{{ item.title }}</h2>
          <p class="folio__items__value__desc">{{ item.description }}</p>
          <a
            class="folio__items__value__link"
            v-if="item.links.github"
            :href="item.links.github"
            rel="nooppener"
            target="_blank"
          >
            <GithubIcon class="icon--inline" />
            GitHub
          </a>
          <a
            class="folio__items__value__link"
            v-if="item.links.website"
            :href="item.links.website"
            rel="nooppener"
            target="_blank"
            >View Website</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Quote from "@/components/Quote.vue";
import Typer from "@/components/Typer.vue";
import GithubIcon from "@/assets/icons/github.svg?inline";
import AbstrBottom from "@/assets/img/abstr-bottom.svg?inline";
import AbstrTop from "@/assets/img/abstr-top.svg?inline";

import { Context } from "@nuxt/types";

export default Vue.extend({
  components: { Quote, Typer, GithubIcon, AbstrBottom, AbstrTop },
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

.abstr {
  width: 100%;
  color: #603046;
  z-index: -1;
}

.about {
  margin: 0;
  text-align: center;

  .abstr {
    transform: translateY(-8px);
  }

  &__title {
    font-size: 2em;
    color: $title-color;
  }

  &__text {
    color: $text-color;
    max-width: 700px;
    margin: 1em auto;
    line-height: 2;
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

.folio {
  &__title {
    color: $title-color;
    display: block;
    text-align: center;
    font-size: 2em;
  }

  &__text {
    color: $text-color;
    display: block;
    text-align: center;
    max-width: 500px;
    margin: 1em auto;
  }

  &__items {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
    margin: 1em auto;

    &__value {
      flex: auto;
      margin: 1em;
      position: relative;
      padding: 2em 1em;
      text-align: center;
      border-radius: 0.5em;

      background: $background-dark;
      border: 2px solid darken($background, 5);
      transition: border 0.2s ease;
      max-width: 500px;

      &__img {
        height: 32px;
        position: absolute;
        left: 1em;
        top: 1em;
        opacity: 0.25;
        transition: opacity 0.25s ease;
      }

      &:hover {
        border: 2px solid darken($primary, 5);

        img {
          opacity: 1;
        }
      }

      &__title {
        color: $title-color;
        font-weight: 700;
        font-size: 1.25em;
        margin: 0 0 0.5em;
      }

      &__desc {
        color: $text-color;
        padding: 0 1em;
        line-height: 1.7;
      }

      &__link {
        display: inline-block;
        margin: 1em 0.5em 0;
        padding: 1em;
        background: $background;
        border-radius: 0.25em;
        text-decoration: none;
        color: $text-color;
        font-weight: 700;
        transition: all 0.25s ease;

        &:hover {
          background: darken($primary, 5);
          color: white;
        }
      }
    }
  }
}
</style>