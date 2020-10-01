<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2>Så er det bare igang</h2></v-card-title>
          <v-card-text>
            views/home.vue
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    }
  }
</script>
