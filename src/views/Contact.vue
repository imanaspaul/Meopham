<template>
    <div class="container">
        <div class="row py-5 bg-white text-dark">
        <Mapone/>
        <div class="col-md-6 p-5">
            <p>Unit 2 Heron Hill Lane Culverstone Meopham DA13 0QL</p>
            <p>Mob: 07718915718   Tel:   01474 812749</p>
            <p>joepayne123@hotmail.com</p>
        </div>
        <div class="col-md-6 p-5">
          <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="ask-question" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
    <button>Submit</button>
  </form>
        </div>
        </div>
    </div>
</template>

<script>
import Mapone from '../components/Maps/Mapone'

export default {
    components : {
        Mapone
    },
    methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>
