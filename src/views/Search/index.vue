<template>
  <div>
      <h1>params参数展示{{$route.params.keyword}}--------{{keyword}}</h1>
      <h1>query参数展示{{$route.query.big}}----{{big}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  props:['keyword','big']
}
</script>

<style scoped>

</style>
