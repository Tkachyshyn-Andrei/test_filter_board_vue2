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
        <!--        <b-col>-->
        <!--          <div>-->
        <!--            <b-form-select v-model="selectedStatus" :options="optionsStatus" class="mb-3">-->
        <!--              <template #first>-->
        <!--                <b-form-select-option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</b-form-select-option>-->
        <!--              </template>-->
        <!--            </b-form-select>-->
        <!--          </div>-->
        <!--        </b-col>-->
        <!--        <b-col>-->
        <!--          <div>-->
        <!--            <b-form-select v-model="selectedCountry" :options="optionsCountry" class="mb-3">-->
        <!--              <template #first>-->
        <!--                <b-form-select-option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</b-form-select-option>-->
        <!--              </template>-->
        <!--            </b-form-select>-->
        <!--          </div>-->
        <!--        </b-col>-->
        <!--        <b-col>-->
        <!--          <div>-->
        <!--            <b-form-input type="text" v-model="searchDescription" placeholder="Enter your text"></b-form-input>-->
        <!--          </div>-->
        <!--        </b-col>-->
      </b-row>
      <b-row>
        <b-col cols="3" class="m-1" v-for="user in users" :key="user.id">
          <b-card>
            <b-card-text>
              {{ user.name }}
            </b-card-text>
            <b-card-text>
              {{ user.email }}
            </b-card-text>
            <b-card-text>
              {{ user.address.geo }}
            </b-card-text>
            <b-card-text>

            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";


export default {
  name: 'App',
  components: {},
  data: () => ({
    users: [],
    selectedStatus: null,
    optionsStatus: [
      {value: null, text: 'Please select an option'},
      {value: '1', text: '1'},
      {value: '2', text: '2'},
      {value: '3', text: '3'}
    ],
    selectedCountry: null,
    optionsCountry: [
      {value: null, text: 'Please select an option'},
      {value: 'ua', text: 'ua'},
      {value: 'en', text: 'en'},
      {value: 'pl', text: 'pl'}
    ],
    searchDescription: '',
  }),
  mounted() {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.users = response.data));
  },


  // computed: {
  //   computedUsers() {
  //     return this.users
  //         .filter(user => {
  //           let filtered = true
  //           if (this.selectedStatus && this.selectedStatus.length > 0) {
  //             filtered = user.status === +this.selectedStatus
  //           }
  //           return filtered
  //         })
  //         .filter(user => {
  //           let filtered = true
  //           if (this.selectedCountry && this.selectedCountry.length > 0) {
  //             filtered = user.country === this.selectedCountry
  //           }
  //           return filtered
  //         })
  //         .filter(user => {
  //           return user.description.toLowerCase().includes(this.searchDescription.toLowerCase());
  //         })
  //   },
  // }
}

</script>

<style>

</style>