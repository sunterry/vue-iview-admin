<template>
  <div id="app">
    <router-view/>
    <Button type="primary" @click="gotoPage">Warning</Button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoPage () {
      this.$router.push({
        name: 'level_2_3'
      })
    }
  }
}
</script>
<style lang="less">
</style>
