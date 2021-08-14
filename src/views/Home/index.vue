<template>
  <div>
    <!-- 全局的三级菜单 -->
    <typeNav />
    <ListContainer/>
    <Recommend/>
  </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from './Recommend';
export default {
  name: "",
  components: {
    ListContainer,
    Recommend 
  },
};
</script>

<style scoped></style>
