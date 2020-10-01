<template>
  <v-app-bar
      app
      elevation="2"
      color="white"
      class="pl-3"
      clipped-left
      @keydown.esc="keyEsc()"
  >
    <v-app-bar-nav-icon @click="$root.drawer = !$root.drawer">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    components/app-bar.vue
    <v-spacer/>
    <v-text-field
        :prepend-inner-icon="loading ? 'mdi-loading mdi-spin' : 'mdi-magnify'"
        flat
        hide-details
        label="Søg (ctrl+space)"
        ref="topSearch"
        @focus="loading = true"
        @blur="loading = false"
    />
  </v-app-bar>
</template>

<script>
  export default {
    name: "app-bar",
    data() {
      return {
        term: '',
        showResults: false,
        loading: false,
      }
    },
    created() {
      document.addEventListener("keydown", e => {
        if (
            e.ctrlKey &&
            e.code === "Space" &&
            typeof this.$refs.topSearch !== "undefined"
        ) {
          this.$refs.topSearch.focus()
          this.term = ""
          this.showResults = false
        }
      })
    },
    methods: {
      keyEsc() {
        this.$refs.topSearch.blur()
      }
    }
  }
</script>

<style scoped>

</style>