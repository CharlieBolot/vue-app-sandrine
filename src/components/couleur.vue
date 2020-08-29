<template>
    <div>
        <button :style="{'backgroundColor' : couleur, 'border-radius' : radius}" @click="changefond" @mouseover="changeform" @mouseleave="reviens" > {{btn}} </button>
    </div>
</template>

<script>
export default {
  name: 'couleur',
  props: {
    btn: String,
    couleur: String,
    radius: String,
  },
  data() {
    return {
    };
  },
  methods: {
    changefond() {
      this.couleur = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
      this.btn = 'Recommence !';
      this.radius = '5%';
      this.$emit('newcouleur', this.couleur, this.btn, this.radius);
    },
    changeform() {
      this.couleur = `#${(Math.random() * 0xFFFFFA << 0).toString(16)}`;
      this.$emit('newcouleur', this.couleur, this.btn);
    },
    reviens() {
      this.btn = 'Reviens ici tout de suite !';
      this.radius = '35%';
      this.$emit('newcouleur', this.btn, this.radius);
    },

  },
};
</script>
