<template>
  <v-navigation-drawer
      app
      floating
      v-model="$root.drawer"
      class="elevation-2"
      clipped
  >
    components/navigation.vue
    <v-list
        dense
    >
      <v-list-item
          :key="i" :to="{name:route.name}"
          exact
          link
          v-for="(route,i) in $router.options.routes"
      >
        <v-list-item-avatar
            v-if="route.icon"
            size="24"
            tile
        >
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ route.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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