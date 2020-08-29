<template>
    <div id="page">
      
       <p>Tout cela pour se rappeler que l'on a passé 10 années mémorables.</p>
       <p>Chaque jour à tes cotés est un cadeau.</p>
       <p>Et que cela soit dans un an, dans dix ou même cent,</p>
       <p>Tu es la seule que je souhaite et souhaiterai avec moi tous les jours</p>
       <p>Je t'aime mon coeur</p>
       

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
      this.$router.replace({ name: 'page3' });
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
