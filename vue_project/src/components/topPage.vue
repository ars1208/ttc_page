<template>
  <div class="top">
    <yearBlock2014></yearBlock2014>
    <yearBlock2015></yearBlock2015>
    <yearBlock2016></yearBlock2016>
  </div>
</template>

<script>
import yearBlock2014 from './yearBlock2014'
import yearBlock2015 from './yearBlock2015'
import yearBlock2016 from './yearBlock2016'

export default {
  components: {
    yearBlock2014,
    yearBlock2015,
    yearBlock2016
  }
}
</script>

<style>
  .top {
    background-image: linear-gradient(180deg, #cdcecf, #577080);
    height: 940px;
  }

  .container {
    background-color: #6d6565;
    height: 300px;
  }
</style>
