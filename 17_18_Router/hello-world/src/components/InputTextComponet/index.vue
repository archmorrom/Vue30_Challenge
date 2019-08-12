<script>
export default {
  name: "input-text-componet",
  props: {
    input: {
      type: String,
      required: true
      // defalt: 'defalt text',
    }
  },
  computed: {
    inputText: {
      get() {
        return this.input;
      },
      set(val) {
        // this.$emit("textChange", val);
        this.$emit("update:input", val);
      }
    }
  }
};
</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>