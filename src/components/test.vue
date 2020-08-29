<template>
  <div class="test">
    <h1>Test de boutton </h1>
      <button v-on:click="count++">Vous m'avez cliqué {{ count }} fois.</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    count: Number,
  },
};
</script>
