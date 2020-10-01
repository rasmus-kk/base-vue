<template>
  <v-navigation-drawer
          permanent
  >
    <v-list-item
            v-for="(route,key) in $router.options.routes"
            :v-key="key">
      <v-list-item-title>
        <router-link :to="{name:route.name}">{{route.name}}</router-link>
      </v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "navigation",
    data() {
      return {
        // reactive variabler her
      }
    },
    mounted() {
      console.log(this.$router)
    }


  }
</script>

<style scoped>

</style>