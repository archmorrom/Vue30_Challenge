<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Title title="從外面(畫面)丟值給裡面(Componet)" /> -->
    <!-- <TitleComponet :titleText="text" /> -->
    <!-- <InputTextComponet :input="text" @textChange="textChangeHandler" /> -->

    <!-- <InputTextComponet :input.sync="text" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <AnotherComponet />-->
    <div>
      <router-link to="/helloworld">Go to HelloWorld</router-link>
    </div>
    <div>
      <router-link to="/another">Go to Another</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AnotherComponet from "./components/AnotherComponet.vue";
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
    InputTextComponet,
    AnotherComponet
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
.router-link-exact-active {
  color: red;
}
/* 被經過的路由(ex: home) */
/* .router-link-active {
  color: orange;
} */
</style>
