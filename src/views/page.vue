<template>
    <div id="page">
        <h1>Notre page</h1>
        <p>Chère Sandrine bienvenu dans ce petit quizz</p>
        <p>Le but de cet exercice est de vérifier si tu nous connais bien</p>
        <p>Ou alors de voir si en 10 ans on a oublié un certain nombre de choses</p>
        <p>Si tu es prête</p>





         <button type="button" v-on:click="home()">Clique ici</button>
      
    </div>
</template>

<script>


export default {
  name: 'page',

  data() {
    return {};
  },

  methods: {
    home() {
      this.$emit('authenticated', false);
      this.$router.replace({ name: 'page1' });
    },
  },
};
</script>

<style scoped>
    #page {
        background-color: #ffffff;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
