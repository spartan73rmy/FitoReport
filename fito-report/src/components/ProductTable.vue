<template>
  <v-card>
    <v-card-title>
      <v-text-field label="Cantidad en litros" required></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="5"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <!-- <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3"
        ></v-switch>
      </template> -->
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      search: "",
      headers: [
        { text: "Cantidad", value: "cantidad" },
        {
          text: "Producto",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Ingrediente Activo", value: "activeIngredient" },
        { text: "Concentracion (%)", value: "concentration" },
        { text: "Intervalo de seguridad (dias)", value: "securityInterval" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          cantidad: 159,
          activeIngredient: 6.0,
          securityInterval: 24,
          concentration: "1%",
        },
        {
          name: "Ice cream sandwich",
          cantidad: 237,
          activeIngredient: 9.0,
          securityInterval: 37,
          concentration: "1%",
        },
        {
          name: "Eclair",
          cantidad: 262,
          activeIngredient: 16.0,
          securityInterval: 23,
          concentration: "7%",
        },
        {
          name: "Cupcake",
          cantidad: 305,
          activeIngredient: 3.7,
          securityInterval: 67,
          concentration: "8%",
        },
        {
          name: "Gingerbread",
          cantidad: 356,
          activeIngredient: 16.0,
          securityInterval: 49,
          concentration: "16%",
        },
        {
          name: "Jelly bean",
          cantidad: 375,
          activeIngredient: 0.0,
          securityInterval: 94,
          concentration: "0%",
        },
        {
          name: "Lollipop",
          cantidad: 392,
          activeIngredient: 0.2,
          securityInterval: 98,
          concentration: "2%",
        },
        {
          name: "Honeycomb",
          cantidad: 408,
          activeIngredient: 3.2,
          securityInterval: 87,
          concentration: "45%",
        },
        {
          name: "Donut",
          cantidad: 452,
          activeIngredient: 25.0,
          securityInterval: 51,
          concentration: "22%",
        },
        {
          name: "KitKat",
          cantidad: 518,
          activeIngredient: 26.0,
          securityInterval: 65,
          concentration: "6%",
        },
      ],
    };
  },
};
</script>
