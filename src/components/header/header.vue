<template lang='pug' src='./header.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  name: 'header',
  computed: {
    props () {
      return this.$store.state.app['header']
    }
  },
  components: {
    Icon
  }
}
</script>
