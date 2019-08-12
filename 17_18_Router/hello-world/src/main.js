import Vue from "vue";
import App from "./App.vue";

// Step1: 導入VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Step2: 導入組件
import HelloWorld from "./components/HelloWorld.vue";
import AnotherComponet from "./components/AnotherComponet.vue";
import AnotherComponetText from "./components/AnotherComponetText.vue";
import AnotherComponetImg from "./components/AnotherComponetImg.vue";

// Step3: 定義路由規則
var routes = [
  {
    path: "/helloworld",
    component: HelloWorld
  },
  {
    path: "/another",
    component: AnotherComponet,
    children: [
      {
        path: "text",
        name: "another-text",
        component: AnotherComponetText
      },
      {
        path: "img",
        name: "another-img",
        component: AnotherComponetImg
      }
    ]
  }
];

// Step4: 創建路由
var router = new VueRouter({
  // routes: routes
  routes
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // Step5: 添加router
  router
}).$mount("#app");
