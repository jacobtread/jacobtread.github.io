<template>
  <div class="socials block">
    <h1 class="block__title">My Socials</h1>
    <p class="block__text">
      You can get in touch with me using any of the following. My github is the
      first link and that hosts all of my publicly available code which you can
      check out.
    </p>
    <div class="socials__grid">
      <a
        href="https://github.com/jacobtread"
        rel="nooppener"
        target="_blank"
        title="GitHub"
        class="socials__grid__item"
      >
        <GithubIcon class="socials__grid__item__icon" />
      </a>
      <a
        href="https://instagram.com/jacobtread"
        rel="nooppener"
        target="_blank"
        title="Instagram"
        class="socials__grid__item"
      >
        <InstagramIcon class="socials__grid__item__icon" />
      </a>
      <a
        href="mailto:jacobtread@gmail.com"
        rel="nooppener"
        target="_blank"
        title="Mail"
        class="socials__grid__item"
      >
        <MailIcon class="socials__grid__item__icon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import GithubIcon from "@/assets/icons/github.svg?inline";
import InstagramIcon from "@/assets/icons/instagram.svg?inline";
import MailIcon from "@/assets/icons/mail.svg?inline";

export default Vue.extend({
  components: {
    GithubIcon,
    InstagramIcon,
    MailIcon,
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.socials {
  &__grid {
    display: flex;
    flex-flow: row;
    justify-content: center;
    &__item {
      text-decoration: none;
      background: $background-dark;
      margin: 1em;
      padding: 0.5em 0.75em;
      color: darken($text-color, 20);
      border-radius: 1em;

      transition: all 0.25s ease;
      transform: scale(1);

      &__icon {
        height: 50px;
      }

      &:hover {
        color: white;
        background: $primary;
        transform: scale(1.1);
      }
    }
  }
}
</style>