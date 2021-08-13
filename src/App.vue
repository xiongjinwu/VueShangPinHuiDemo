<template>
  <div>
    <Header />
     <!-- 路由组件出口的地方 -->
     <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//引入Header与Footer非路由组件
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
