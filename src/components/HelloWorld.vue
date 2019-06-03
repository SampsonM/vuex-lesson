<template>
  <div class="hello">
    <TitleHead :foo="foo" />

    <p>TEAM 1: {{ currentTeam1 }}</p>
    <button @click="incrementScore({team: 1})">TEAM 1</button>
    <p>TEAM 2: {{ currentTeam2 }}</p>
    <button @click="incrementScore({team: 2})">TEAM 2</button>
    <button @click="saveScores()">End Game</button>

    <ul v-for="score in historicalScores">
      <li>{{score}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TitleHead from './Title.vue'

export default {
  name: 'HelloWorld',
  components: {
    TitleHead
  },
  props: {
    msg: String,
    foo: String
  },
  computed: {
    ...mapState([
      'currentTeam1',
      'currentTeam2',
      'historicalScores'
    ])
  },
  methods: {
    ...mapActions([
      'incrementScore',
      'saveScores'
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
