<template>
<section class="container">
  <div class="alignSteps">
<at-steps :current='current'>
  <at-step v-for="(step, index) in steps"
    :title="step.title"
    :key="index"></at-step>
</at-steps>
  </div>
<div>
  <div v-show="current==0">
    <p>Personal Information</p>

<at-input v-model="inputValue" placeholder="Full Name"></at-input>

<at-radio-group v-model="radio3">
  <at-radio label="1">Male</at-radio>
  <at-radio label="2">Female</at-radio>
  <at-radio label="3">Do not wish to disclose</at-radio>
</at-radio-group>
<p class="demo-desc">Birthday</p>
<div class="row no-gutter" style="margin-left: 20px">
  <div >
    <at-input-number :min="1" :max="31"></at-input-number>
  </div>
  <at-select v-model="model8" filterable size="large" style="width: 240px; margin-left: 20px">
  <at-option value="1">January</at-option>
  <at-option value="2">February</at-option>
  <at-option value="3">March</at-option>
  <at-option value="4">April</at-option>
  <at-option value="5">May</at-option>
  <at-option value="6">June</at-option>
  <at-option value="7">July</at-option>
  <at-option value="8">August</at-option>
  <at-option value="9">September</at-option>
  <at-option value="10">October</at-option>
  <at-option value="11">November</at-option>
  <at-option value="12">December</at-option>
</at-select>
</div>


  </div>

  <div v-show="current==1">
    <p>Physical Information</p>

    <p class="demo-desc">Height(cm)</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number v-model="num2" :step="0.1" :min="0"></at-input-number>
  </div>
</div>
    <p class="demo-desc">Weight(kg)</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number v-model="num2" :step="0.1" :min="0"></at-input-number>
  </div>
</div>


  </div>

  <div v-show="current==2">
    <p>Medical Information</p>

    <at-textarea v-model="inputValue3" autosize placeholder="Please tell us about any pre-existing conditions"></at-textarea>

  </div>
</div>


<at-button type="primary" @click="previousStep" style="margin-top: 12px;">Prev</at-button>
<at-button type="primary" v-if='current < 2' @click="nextStep" style="margin-top: 12px; margin-left: 12px">Next</at-button>
<nuxt-link to="/homepage"> 
        <at-button v-if='current==2' type="primary" style="margin-top: 12px; margin-left: 12px">Submit</at-button>
</nuxt-link>

</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  layout: 'blank',
      components: {
    AppLogo
  },
data () {
      return {
        current: 0,
        step: 0,
        steps: [{
              step: 1},
            {
              step: 2},
            {
              step: 3,
        }]
      }
    },
    methods: {
      nextStep() {
        if (this.current++ == 2)
          this.current = 2
      },
      previousStep() {
        if (this.current-- <= 0)
          this.current = 0 
      }
    }

}
</script>

<style scoped>
.container {
  margin-top: 10px;
  display: 100px; 
  justify-content: center;
  align-items: center;
  text-align: center;
}
.alignSteps {
margin-left: 75px;
}

</style>


