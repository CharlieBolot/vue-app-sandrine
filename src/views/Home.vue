<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Bienvenu dans mon application</h1>
    <form id="pass">
      <h2>Connexion :</h2>
      Login : <input type="text" name="page" placeholder="login" v-model="input.username"><br>
      Mot de passe : <input  style="margin-top: 15px"  type="password" name="password"
      placeholder="Password" v-model="input.password"><br>
      <button style="margin-top: 15px" type="submit" v-on:click="login()">Valider</button>
    </form>
    <test count=0 />
    <h3>Et voici les boutons de couleur :</h3>
    <couleur couleur=#ABfDDD btn='clique sur moi !' @newcouleur="$event"/>
    <couleur couleur=#ABCDED btn='non ici !' @newcouleur="$event"/>
    <couleur couleur=#AABCCA btn='mais non là !' @newcouleur="$event"/>

  </div>
</template>

<script>
// @ is an alias to /src
import test from '@/components/test.vue';
import couleur from '@/components/couleur.vue';

export default {
  name: 'home',
  components: {
    test,
    couleur,
  },
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username
        && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true);
          // will run after $emit is done
          this.$router.replace({ name: 'page' });
          // this.$root.authenticated = true;
        } else {
          // console.log('The username and / or password is incorrect');
          alert("L'identifiant et/ou le mdp est incorrect");
        }
      } else {
        // console.log('A username and password must be present');
        alert('Veuillez entrer un mdp et un identifiant');
      }
    },
    goBack() {
      return window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
};
</script>
