<template>
  <div>
    <Header></Header>
    <!-- 一级路由显示 -->
    <router-view>Home</router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="less" scoped>
</style>
