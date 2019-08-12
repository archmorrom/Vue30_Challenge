<template>
  <div>
    <h3>Another Page</h3>
    <h3 style="background-color: yellow;">Two Child Link</h3>
    <!-- <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rerum praesentium sint numquam. Corrupti, magni. Optio natus libero aperiam nesciunt necessitatibus doloremque consequuntur, atque soluta a, error dolore qui. Consequuntur.</div>
    <div>
      <img src="https://picsum.photos/600/400" />
    </div>-->
    <div style="margin-bottom: 20px;">
      <router-link to="/another/text">Show Text</router-link>
      <label style="margin-left: 20px;"></label>
      <!-- <router-link to="/another/img">Show Image</router-link> -->
      <router-link :to="{name: 'another-img'}">Show Image</router-link>
    </div>
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AnotherComponet"
  //   props: {
  //     msg: String
  //   }
};
</script>