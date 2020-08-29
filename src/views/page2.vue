<template>
    <div id="page">
      
        <h1>Reponse 1 </h1>
        <p>Ou nous sommes nous rencontré ?</p>
        <p>Doudeville</p>
         <p>cette belle ville qui nous manque tellement (c'est faux)</p>

        <h1>Reponse 2 </h1>
        <p>Quelle activité est-ce que l'on pratiquait ?</p>
        <p>Caissier(e)</p>
        <p>Carrefour market, c'est grace à toi</p>


        <h1>Reponse 3 </h1>
        <p>Qui a fait le premier pas?</p>
        <p> Elle</p>
        <p>Et encore heureux, sinon j'aurais rien capté</p>


        <h1>Reponse 4 </h1>
        <p>Combien de rendez-vous avons nous eu ensemble hors du boulot avant de sortir ensemble ?</p>
        <p> 1, on sais ce qu'on veux quand même</p>
        <p> Sortie à Saint Valery après avoir été chercher notre salaire </p>


        <h1>Reponse 5 </h1>
        <p>Lors du fameux soir, quel film avons nous été voir</p>
        <p> L'apprenti sorcier</p>
        <p> Film que nous avons du revoir car tu t'en souvenais pas</p>
        <p> c'est pas comme thor que nous avons du voir plusieur fois pour le voir en entier </p>


        <h1>Reponse 6 </h1>
        <p>Dans ma famille (en dehors de mes parents) comment me suis-je fait griller rapidement ?</p>
        <p> A cause d'un oubli de clé</p>
        <p>Paulo, mothus et bouche cousus, il a rien dit...Nelly pour sa part à rien capté </p>


        <h1>Reponse 7 </h1>
        <p>Que c'est il passé la 1ere fois que nous avons été à ton appartement tous les deux ? </p>
        <p> une voiture a été percutée</p>
        <p>Pour ma part j'était tellement dans un autre monde que je touchais plus le sol à ce moment là...donc accident de plus ou de moins j'aurais rien vu</p>


        <h1>Reponse 8 </h1>
        <p>Combien temps avons nous vécu séparé ?</p>
        <p> 4 ans, après tout c'est pas trop loin</p>
        <p>5 ans, qu'est-ce que la distance ?</p>
        <p>Bon ok c'est environ 4.5ans presque 5</p>


        <h1>Reponse 9 </h1>
        <p>Ou sommes nous allé en vacances pour la première fois</p>
        <p> Tours</p>
        <p>On avais été voir Delphine dans son appart, on avait visité tours et manger une super pizza </p>



        <h1>Reponse 10 </h1>
        <p>Comment s'appelait notre première plante verte ?</p>
        <p> Cookie, le cactus</p>
        <p> Et effetivement c'est moi qui avait trouvé le nom...il a quand même fini par mourrir de soif, snif </p>


        <h1>Reponse 11 </h1>
        <p>Combien de fois avons nous été à l'étranger ?</p>
        <p> 2, ca a l'air sympa ailleur</p>
        <p> 2 Voyages memorables : le portugal et la belgique </p>


        <br>

         <button type="button" v-on:click="home()">Confirmation des réponses</button> 
      
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
