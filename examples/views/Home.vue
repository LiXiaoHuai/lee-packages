<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <lee-textarea :aaa.sync="aaa" @leeinput="leeinput" />
    <div>{{ aaa }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  watch: {
    aaa(n) {
      console.log("w", n);
    },
  },
  data() {
    return {
      aaa: 0,
    };
  },
  methods: {
    leeinput(v) {
      this.aaa = v;
    },
  },
};
</script>
