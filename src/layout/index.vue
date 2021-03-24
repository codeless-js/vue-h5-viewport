<template>
  <div class="g-wrap">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Layout',
  components: {  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.g-left {
  background: #515a6e;
}
.g-app-main {
  background-color: #f5f6fa;
}
</style>
