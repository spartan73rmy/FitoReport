<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Productor</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Analisis</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="3">Recomendacion</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
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
            </v-row>
          </v-container>
        </v-card-text>

        <v-btn color="primary" @click="e1 = 2">Continuar</v-btn>
        <v-btn text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card-text>
          <v-container>
            <v-row>
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
        <v-btn color="primary" @click="e1 = 3">Continuar</v-btn>

        <v-btn text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">Aceptar</v-btn>

        <v-btn text>Cancelar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
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
    e1: 1,
    position: null
  })
};
</script>
