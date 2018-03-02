<template>
  <div id="app">
    <img src="./assets/logo.png" width="275px">


  <ul id="example-1">
  <li v-for="machine in machines">
    {{ machine.name }} <toggle-button :value=" machine.status  " 
               :labels="{checked: 'Activé', unchecked: 'Désactivé'}"/>
    </li>
  </ul>



</br></br>

    <h2>--------------------------------------------------------------------------</h2></br>
    <h3> Machines à café n°1 </h3>    {{ machine1 }}
    <h3 v-if="machine1"><img src="https://startupsavant.com/wp-content/uploads/2014/01/Validate-your-business-idea.png" alt="Smiley face" height="50px"></h3>
    <h3 v-else><img src="https://alyssabethancourt.files.wordpress.com/2014/07/no.gif" alt="Smiley face" height="50px"></h3>
    <button @click="machine1 = !machine1" :aria-expanded="machine1 ? 'true' : 'false'">
    Activer/Désactiver 
    </button> </br></br></br>

    <h2>--------------------------------------------------------------------------</h2></br>


    <h3> Machines à café n°2 </h3>    {{ machine2 }}
    <h3 v-if="machine2"><img src="https://startupsavant.com/wp-content/uploads/2014/01/Validate-your-business-idea.png" alt="Smiley face" height="50px"></h3>
    <h3 v-else><img src="https://alyssabethancourt.files.wordpress.com/2014/07/no.gif" alt="Smiley face" height="50px"></h3>
    <button @click="machine2 = !machine2" :aria-expanded="machine2 ? 'true' : 'false'">
    Activer/Désactiver 
    </button></br></br></br>
  
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      machine1: true,
      machine2: false,
      machines: [
      {
        name: "Machine1",
        status: true
      },
      {
        name: "Machine2",
        status: false
      },
      {
        name: "Machine3",
        status: true
      }
      
      ]
      
    } 
  }
}


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
