<template>
  <div>
    <!-- <h1 class="msg">{{ msg }}</h1> -->
    <h2>{{ titleText }}</h2>
  </div>
</template>

<script>
export default {
  name: "titleComponet",
  props: {
    titleText: {
      type: String,
      required: true
    }
  }
  // data() {
  //   return {
  //     msg: "Hello, How are you?"
  //   };
  // }
};
</script>

<style scoped>
h2 {
  color: orange;
}
</style>