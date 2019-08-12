<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Title title="從外面(畫面)丟值給裡面(Componet)" /> -->
    <TitleComponet :titleText="text" />
    <!-- <InputTextComponet :input="text" @textChange="textChangeHandler" /> -->
    <InputTextComponet :input.sync="text" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponet from "./components/TitleComponet.vue";
import InputTextComponet from "./components/InputTextComponet/index.vue";

export default {
  name: "app",
  data() {
    return {
      text: "從裡面(Componet)改外面(畫面)的值"
    };
  },
  components: {
    HelloWorld,
    TitleComponet,
    InputTextComponet
  }
  // methods: {
  //   textChangeHandler(val) {
  //     this.text = val;
  //   }
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
