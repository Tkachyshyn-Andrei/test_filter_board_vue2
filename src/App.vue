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
        <b-col>
          <div>
            <b-form-select v-model="selectedStatus" :options="optionsStatus" class="mb-3">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
            </b-form-select>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-form-select v-model="selectedCountry" :options="optionsCountry" class="mb-3">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
            </b-form-select>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-form-input type="text" v-model="searchDescription" placeholder="Enter your text"></b-form-input>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" v-for="item in computedItems" :key="item.id">
          <b-card>
            <b-card-text>
              {{ item.name }}
            </b-card-text>
            <b-card-text>
              {{ item.status }}
            </b-card-text>
            <b-card-text>
              {{ item.description }}
            </b-card-text>
            <b-card-text>
              {{ item.rate }}
            </b-card-text>
            <b-card-text>
              {{ item.country }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import makeCard from "@/data/generateData";

export default {
  name: 'App',
  components: {},
  data: () => ({
    items: makeCard(3),
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
  computed: {
    computedItems() {
      return this.items
          .filter(item => {
            let filtered = true
            if (this.selectedStatus && this.selectedStatus.length > 0) {
              filtered = item.status === +this.selectedStatus
            }
            return filtered
          })
          .filter(item => {
            let filtered = true
            if (this.selectedCountry && this.selectedCountry.length > 0) {
              filtered = item.country === this.selectedCountry
            }
            return filtered
          })
          .filter(item => {
            return item.description.toLowerCase().includes(this.searchDescription.toLowerCase());
          })
    },
  }
}

</script>

<style>

</style>
