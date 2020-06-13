<template>
  <v-row justify="center">
    <!-- Dialog -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          bottom
          color="green"
          dark
          fab
          fixed
          right
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Reporte de visita</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nombre del Productor"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Lugar" hint="" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-datetime-picker label="Selecciona la fecha" v-model="fecha">
                </v-datetime-picker>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Ubicacion"
                  hint="Seleccione permitir ubicacion"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Nombre del predio" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Cultivo" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="[
                    'Iniciación y diferenciación floral',
                    'Flujos de crecimiento vegetativo',
                    'Amarre y caída de fruto',
                    'Crecimiento y maduración del fruto',
                    'Crecimiento de raíces',
                    'Abscisión de hojas'
                  ]"
                  label="Etapa Fenologica"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="enfermedades"
                  label="Enfermedades"
                  item-value="name"
                  item-text="name"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="plagas"
                  label="Plagas"
                  item-value="name"
                  item-text="name"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Observaciones"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Guardar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End Dialog -->
  </v-row>
</template>

<script lang="ts">
import { db } from "../main";

export default {
  components: {},
  mounted() {
    // this.getEnfermedades();
    // this.getPlagas();
    this.getGeolocation();
    this.getLocation();
  },
  methods: {
    getEnfermedades() {
      this.enfermedades = [];
      db.collection("enfermedad")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.enfermedades.push({
              id: doc.id,
              name: doc.data().nombre
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
          return [];
        });
    },
    getPlagas() {
      this.plagas = [];
      db.collection("plaga")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.plagas.push({
              id: doc.id,
              name: doc.data().nombre
            });
          });
        });
    },

    getGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      }
    },
    async getLocation() {
      try {
        const coordinates = await this.$getLocation({
          enableHighAccuracy: true
        });
        this.coordinates = coordinates;
        this.noLocation = false;
        console.log(coordinates);
      } catch (error) {
        this.noLocation = true;
      }
    }
  },
  data: () => ({
    enfermedades: [],
    plagas: [],
    dialog: false,
    fecha: null,
    position: null
  })
};
</script>
