<template>
  <div id="Home">
    <router-view />
  </div>
</template>

<script lang="ts">
import { db } from "../main";

export default {
  components: {},
  mounted() {
    this.getReports();
  },
  props: {
    source: String
  },
  methods: {
    async getReports() {
      try {
        const collection = await db.collection("reporte").get();
        let items = [];
        collection.forEach(el => {
          items.push(el.data());
          console.log(el.data());
        });
        return items;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
