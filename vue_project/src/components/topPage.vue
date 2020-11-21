<template>
  <div class="top">
    <yearBlock2014></yearBlock2014>
    <yearBlock2015></yearBlock2015>
    <yearBlock2016></yearBlock2016>
    <yearBlock2017></yearBlock2017>
    <yearBlock2018></yearBlock2018>
  </div>
</template>

<script>
import yearBlock2014 from './yearBlock2014'
import yearBlock2015 from './yearBlock2015'
import yearBlock2016 from './yearBlock2016'
import yearBlock2017 from './yearBlock2017'
import yearBlock2018 from './yearBlock2018'

export default {
  components: {
    yearBlock2014,
    yearBlock2015,
    yearBlock2016,
    yearBlock2017,
    yearBlock2018
  }
}
</script>

<style>
  .top {
    background-image: linear-gradient(180deg, #cdcecf, #577080);
    height: 160
    0px;
  }

  .container {
    background-color: #6d6565;
    height: 300px;
    width: auto;
    margin: 20px;
    display: flex;
  }

  .container li {
    list-style: none;
  }
</style>
