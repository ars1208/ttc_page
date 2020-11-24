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
    height: auto;
  }

  .container {
    height: auto;
    width: auto;
    margin: 20px;
    display: flex;
    border: solid 2px;
    border-radius: 30px;
  }

  .container li {
    list-style: none;
    margin: 20px;
  }

  .boxL {
    width: 900px;
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 70px;
    text-align: center;
  }

  .boxR {
    width: 700px;
    margin: 0 0 0 0px;
    font-size: 25px;
  }

  /* 小さい画面での表示*/
  @media (max-width: 530px) {
    .boxL {
      width: 900px;
      font-family: 'Big Shoulders Stencil Display', cursive;
      font-size: 50px;
      text-align: center;
    }

    .hideContents {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 20px;
    }

    .boxR {
      display: none;
    }
  }

  @media (min-width: 531px) {
    .hideContents {
      display: none;
    }
  }
</style>
