<script setup>


</script>

<template>
  <div class="container welcome">
    <h1>Welcome</h1> 
    <router-view></router-view>
  </div>
</template>

<style>
  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .welcome h1 {
    text-align: center;
    text-transform: uppercase;
  }

  .welcome input {
    margin: 20px auto 0;
    display: block;
    background-color: transparent;
    color: inherit;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 100px;
    min-width: 400px;
  }

  .welcome button {
    margin: 0 auto;
    display: block;
  }


</style>
