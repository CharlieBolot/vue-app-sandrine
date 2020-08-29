<template>
    <div id="page">
        <h1>Ma page</h1>
        <p>
           C'est MA Page !
        </p>
         <button type="button" v-on:click="home()">Déconnexion</button>
         <test count=0 />
         <h3>Test bouton couleur </h3>
         <couleur couleur=#fffAAA btn='vas-y clique !' @newcouleur="$event"/>
         <couleur couleur=#fffBBB btn='sinon là' @newcouleur="$event"/>
         <couleur couleur=#fffCCC btn='ou ici !' @newcouleur="$event"/>
    </div>
</template>

<script>
import test from '@/components/test.vue';
import couleur from '@/components/couleur.vue';

export default {
  name: 'page',
  components: {
    test,
    couleur,
  },
  data() {
    return {};
  },

  methods: {
    home() {
      this.$emit('authenticated', false);
      this.$router.replace({ name: 'Home' });
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
