<template>
  <div>导航栏
    <router-link to="/">Su</router-link>
    |
    <router-link to="/su2">Su2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>
