<template>
  <v-app>
    <navigation/>
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from "./components/navigation";
  import AppBar from "./components/app-bar";

  export default {
    components: {AppBar, Navigation}
  }
</script>

<style>

</style>