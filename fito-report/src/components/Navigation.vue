<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link to="/Home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/AddReport">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reporte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/Contact">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/About">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Acerca de</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Reporte Fitosanitario</v-toolbar-title>
    </v-app-bar>

    <v-footer color="blue-grey" app>
      <span class="white--text"> &copy;{{ date }}</span>
    </v-footer>
  </div>
</template>

<script>
let date = new Date();

export default {
  data() {
    return {
      date: date.getFullYear(),
      drawer: null,
    };
  },
};
</script>

<style></style>
