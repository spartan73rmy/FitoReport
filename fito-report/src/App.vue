<template>
  <v-app>
    <Navigation />

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Home from "../src/views/Home.vue";
import Navigation from "../src/components/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
