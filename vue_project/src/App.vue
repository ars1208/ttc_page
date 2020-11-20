<template>
  <div>
    <myHeader></myHeader>
    <topPage></topPage>
    <myFooter></myFooter>
  </div>
</template>

<script>
import topPage from './components/topPage'
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'

export default {
  components: {
    topPage,
    myHeader,
    myFooter
  }
}
</script>

<style>
</style>
