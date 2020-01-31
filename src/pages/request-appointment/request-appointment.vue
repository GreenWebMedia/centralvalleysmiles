<template lang='pug' src='./request-appointment.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import RequestAppointmentForm from 'components/form/request-appointment-form/request-appointment-form'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['request-appointment']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer,
    RequestAppointmentForm
  }
}
</script>

