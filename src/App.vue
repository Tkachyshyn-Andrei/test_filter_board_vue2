<template>
  <b-container fluid>
    <div id="app">
      <b-row>
        <b-col cols="4">
          <b-card class="mb-3" v-for="user in users" :key="user.id"
                  @mouseenter="move(user)"
                  @mouseleave="leave(user)"
                  @click="selectActiveUser(user)"
                  :class="{'active-user': user === selectedUser}">
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
                      :box-zoom="false"
                      :scrollZoom="false"
                      :double-click-zoom="false"
                      :drag-pan="false"
                      :drag-rotate="false"
                      :keyboard="false"
                      :touch-zoom-rotate="false"
                      :zoom="selectedUser===user?1:5"
                      :center="[ +user.address.geo.lng, +user.address.geo.lat]">
                <MglMarker :coordinates="[ +user.address.geo.lng, +user.address.geo.lat]"
                           color="blue"/>
              </MglMap>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="8">
          <MglMap container="map-wrapper" class="mapStyle main-map"
                  :accessToken="accessToken"
                  :mapStyle="mapStyle"
                  @click="mapClick"
                  :zoom="1">
            <MglMarker
                v-if="activeUser"
                :coordinates="[ +activeUser.address.geo.lng, +activeUser.address.geo.lat]"
                color="blue"/>
          </MglMap>
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
    activeUser: null,
    selectedUser: null,
  }),
  mounted() {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.users = response.data));
  },
  methods: {
    move(user) {
      this.$refs[`map-user-${user.id}`][0].map.flyTo({
        zoom: 1,
      })
      setTimeout(() => {
        this.activeUser = user
      }, 1000)
    },
    leave(user) {
      this.$refs[`map-user-${user.id}`][0].map?.flyTo({
        zoom: 5,
      })
    },
    selectActiveUser(user) {
      this.selectedUser = user
    },
    mapClick({mapboxEvent: {lngLat: {lat, lng}}}) {
      if (this.selectedUser) {
        this.selectedUser.address.geo.lat = lat
        this.selectedUser.address.geo.lng = lng
      }
    },
  }
}
</script>

<style>
.container-fluid {
  padding-top: 15px;
  padding-bottom: 15px;
}

.users-map {
  max-width: 100%;
  height: 300px;
  width: 100%;
}

.main-map {
  position: sticky;
  top: 15px;
  max-width: 100%;
  height: calc(100vh - 30px);
  width: 100%;
}

.active-user {
  background-color: #f3efe9 !important;
}

.card-body {
  cursor: pointer;
}


</style>