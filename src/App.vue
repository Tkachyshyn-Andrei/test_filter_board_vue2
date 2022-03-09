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
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
            </b-form-select>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
            </b-form-select>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
            </b-form-select>
            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <template>
            <div v-for="item in items" v-bind:key="item.id">
              <b-card title="Card title" v-bind:key="item">

              </b-card>
            </div>
          </template>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>


export default {
  name: 'App',
  components: {},
  el: '#v-for-object',
  data: () => ({
    items: [
      {id: '0'},
      {name: 'Andrei'},
      {status: '1'},
      {description: 'text'}
    ]
  })
  // data() {
  //   return {
  //     selected: null,
  //     options: [
  //       {value: 'A', text: 'Option A (from options prop)'},
  //       {value: 'B', text: 'Option B (from options prop)'}
  //     ]
  //   }
  // }
}
</script>

<style>

</style>
