<template lang='pug' src='./header.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      // return this.$store.state.app.header
      return true
    }
  },
  components: {
    Icon
  }
}
</script>
