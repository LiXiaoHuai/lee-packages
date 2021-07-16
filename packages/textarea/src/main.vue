<template>
  <input @input="getText" v-model="val" />
</template>

<script>
export default {
  name: "leeTextarea",
  props: ["aaa"],
  data() {
    return {
      val: 1,
    };
  },
  watch: {},
  methods: {
    getText() {
      console.log("getText", this.val);
      this.$emit("leeinput", this.val);
    },
  },
};
</script>

<style>
</style>