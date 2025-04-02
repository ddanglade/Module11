<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/random-facts">Random Facts</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  display: flex;
  gap: 20px;
}

router-link {
  text-decoration: none;
}
</style>
