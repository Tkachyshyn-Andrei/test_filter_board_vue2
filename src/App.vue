<template>
  <b-container>
    <div id="app">
      <div>
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" alt="Kitten">
          </b-navbar-brand>
        </b-navbar>
      </div>
      <b-row>
        <b-col cols="4" v-for="user in users" :key="user.id">
          <b-card class="mb-3">
            <b-card-text>
              Name: {{ user.name }}
            </b-card-text>
            <b-card-text>
              Email: {{ user.email }}
            </b-card-text>
            <b-card-text>
              <MglMap container="map-wrapper" class="mapStyle"
                      :accessToken="accessToken"
                      :mapStyle="mapStyle"
                      :zoom="5"
                      :center="[ +user.address.geo.lng, +user.address.geo.lat]">
                <MglMarker :coordinates="[ +user.address.geo.lng, +user.address.geo.lat]" color="blue"/>
              </MglMap>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import 'v-mapbox/dist/v-mapbox.css';

import axios from "axios";
import {MglMap, MglMarker} from 'v-mapbox'

export default {
  name: 'App',
  components: {
    MglMap, MglMarker
  },
  data: () => ({
    users: [],
    accessToken: 'pk.eyJ1Ijoia2lyaWxvIiwiYSI6ImNsMHM2NWhiNDAzemkzZG81ZjJ2YmFydDkifQ.x3fhucH9KpKg4amuJxCFwA',
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
  }),
  mounted() {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.users = response.data));
  },
}
</script>

<style>
.mapStyle {
  max-width: 100%;
  height: 300px;
  width: 100%;
}
</style>