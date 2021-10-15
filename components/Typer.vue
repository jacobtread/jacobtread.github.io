<template>
  <span :class="{ typer: true, 'typer--caret': !complete}">{{
    value
  }}</span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["values", "duration"],
  data() {
    return {
      deleting: false,
      value: "",
      index: 0,
    };
  },
  mounted() {
    this.tick();
  },
  computed: {
    complete(): boolean {
      const original: string = this.values[this.index];
      return this.value == original;
    },
  },
  methods: {
    tick() {
      const original: string = this.values[this.index];
      let delta: number = 300 - Math.random() * 100;
      if (this.deleting) {
        this.value = original.substr(0, this.value.length - 1);
        if (this.value.length == 0) {
          this.deleting = false;
          if (this.index + 1 >= this.values.length) {
            this.index = 0;
          } else this.index++;
          delta = 500;
        } else {
          delta /= 2;
        }
      } else {
        this.value = original.substr(0, this.value.length + 1);
        if (this.value == original) {
          delta = this.duration;
          this.deleting = true;
        }
      }
      setTimeout(this.tick, delta);
    },
  },
});
</script>
<style lang="scss" scoped>
.typer {
  position: relative;
  margin-right: 4px;
}

.typer--caret {
  &::after {
    content: "";
    position: absolute;
    right: -4px;
    width: 2px;
    height: 100%;
    background: currentColor;
    animation: cursor-blink 500ms 500ms infinite;
  }
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>

