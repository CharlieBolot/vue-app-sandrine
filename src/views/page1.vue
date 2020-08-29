<template>
    <div id="page">
        <h1>Question 1 </h1>
        <p>Ou nous sommes nous rencontré ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>Doudeville</option>
          <option>Yvetot</option>
          <option>Le Havre</option>
        </select>

        <h1>Question 2 </h1>
        <p>Quelle activité est-ce que l'on pratiquait ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>Le poney</option>
          <option>Caissier(e)</option>
          <option>Postier(e)</option>
        </select>

        <h1>Question 3 </h1>
        <p>Qui a fait le premier pas?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>Elle</option>
          <option>Lui</option>
        </select>

        <h1>Question 4 </h1>
        <p>Combien de rendez-vous avons nous eu ensemble hors du boulot avant de sortir ensemble ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>0, on est sorti direct !</option>
          <option>1, on sais ce qu'on veux quand même</option>
          <option>2, ca va on est pas trop pressé</option>
        </select>

        <h1>Question 5 </h1>
        <p>Lors du fameux soir, quel film avons nous été voir</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>Thor</option>
          <option>L'apprenti sorcier</option>
          <option>Inception</option>
        </select>

        <h1>Question 6 </h1>
        <p>Dans ma famille (en dehors de mes parents) comment me suis-je fait griller rapidement ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>A cause d'un oubli de clé</option>
          <option>A cause d'un "accident" de voiture</option>
          <option>A cause des commérages du pays de caux</option>
        </select>

        <h1>Question 7 </h1>
        <p>Que c'est il passé la 1ere fois que nous avons été à ton appartement tous les deux ? </p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>L'appartement s'était fait cambriolé</option>
          <option>il y a eu une fuite d'eau </option>
          <option>une voiture a été percutée</option>
        </select>

        <h1>Question 8 </h1>
        <p>Combien temps avons nous vécu séparé ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>2 ans, on est bien chacun chez soi</option>
          <option>3 ans, on a besoin notre espace</option>
          <option>4 ans, après tout c'est pas trop loin</option>
          <option>5 ans, qu'est-ce que la distance ?</option>
        </select>

        <h1>Question 9 </h1>
        <p>Ou sommes nous allé en vacances pour la première fois</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>Perigeux</option>
          <option>La rochelle</option>
          <option>Angers</option>
          <option>Tours</option>
        </select>


        <h1>Question 10 </h1>
        <p>Comment s'appelait notre première plante verte ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>pepito, le geranium</option>
          <option>Mars, la fougère</option>
          <option>Paul, l'orchidée</option>
          <option>Cookie, le cactus</option>
        </select>

        <h1>Question 11 </h1>
        <p>Combien de fois avons nous été à l'étranger ?</p>
        <select v-model="selected">
          <option disabled value="">choisir une solution</option>
          <option>0, on est bien chez nous</option>
          <option>1, on va voir ce qu'il y a dehors</option>
          <option>2, ca a l'air sympa ailleur</option>
          <option>3, des vrais globe-trotteurs</option>
        </select>

<br>
<br>

         <button type="button" v-on:click="home()">Validation des réponses</button>
      
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
      this.$router.replace({ name: 'page2' });
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
