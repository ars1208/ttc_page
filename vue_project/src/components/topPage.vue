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
    height: auto;
  }

  .container {
    background-color: #6d6565;
    height: auto;
    width: auto;
    margin: 20px;
    display: flex;
    border-radius: 30px;
  }

  .container li {
    list-style: none;
    margin: 20px;
  }

  .boxL {
    width: 800px;
    font-size: 40px;
  }

  .boxL {
    text-align: center;
  }

  .boxR {
    width: 800px;
    margin: 0 0 0 auto;
    font-size: 25px;
  }
</style>
