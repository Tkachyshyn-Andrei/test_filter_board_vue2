<template>
  <b-container fluid>
    <div id="app">
      <div>
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" alt="Kitten">
          </b-navbar-brand>
        </b-navbar>
      </div>
      <b-row>
        <b-col cols="4">
          <b-col v-for="user in users" :key="user.id">
            <b-card class="mb-3" @mouseenter="move(user)" @mouseleave="leave(user)">
              <b-card-text>
                Name: {{ user.name }}
              </b-card-text>
              <b-card-text>
                Email: {{ user.email }}
              </b-card-text>
              <b-card-text>
                <MglMap :ref="`map-user-${user.id}`" container="map-wrapper" class="mapStyle users-map"
                        :accessToken="accessToken"
                        :mapStyle="mapStyle"
                        :zoom="zoom"
                        :center="[ +user.address.geo.lng, +user.address.geo.lat]">
                  <MglMarker :coordinates="[ +user.address.geo.lng, +user.address.geo.lat]"
                             color="blue"/>
                </MglMap>
              </b-card-text>
            </b-card>
          </b-col>
        </b-col>
        <b-col cols="8" class="main-map-fixed">
          <b-col>
            <MglMap container="map-wrapper" class="mapStyle main-map"
                    :accessToken="accessToken"
                    :mapStyle="mapStyle"
                    :zoom="1">
              <MglMarker
                  v-if="activeUser"
                  :coordinates="[ +activeUser.address.geo.lng, +activeUser.address.geo.lat]"
                  color="blue"/>
            </MglMap>
          </b-col>
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
    zoom: 5,
    activeUser: null,
  }),
  mounted() {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.users = response.data));
  },
  methods: {
    move(user) {
      this.$refs[`map-user-${user.id}`][0].map?.flyTo({
        zoom: 1,
        speed: 1,
        curve: 1,
      })
      this.activeUser = user
    },
    leave(user) {
       this.$refs[`map-user-${user.id}`][0].map?.flyTo({
        center: [ +user.address.geo.lng, +user.address.geo.lat],
        zoom: 5,
        speed: 1,
        curve: 1,
      })
      this.activeUser = null
    }
  }
}
</script>

<style>
.users-map {
  max-width: 100%;
  height: 300px;
  width: 100%;
}

.main-map {
  max-width: 100%;
  height: 90vh;
  width: 100%;
}
</style>