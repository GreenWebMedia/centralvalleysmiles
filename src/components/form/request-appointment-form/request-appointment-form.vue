<template lang='pug' src='./request-appointment-form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      patientName: '',
      radiographs: '',
      patientemail: '',
      patientAddress: '',
      phoneNumber: '',
      preferredDays: '',
      convenientTimes: '',
      generalDentist: '',
      message: '',
      ourPractice: '',
      ourWebsite: '',
      postUrl: api + '/rg-mail/v1/dentalreferralform',
      formSubmitted: false,
      formSuccess: false,
      modalShowing: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    closeModal () {
      this.formSuccess = false
      this.formSubmitted = false
      setTimeout(() => {
        this.modalShowing = false
      }, 150)
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        patientName: this.patientName,
        radiographs: this.radiographs,
        patientemail: this.patientemail,
        patientAddress: this.patientAddress,
        phoneNumber: this.phoneNumber,
        preferredDays: this.preferredDays,
        convenientTimes: this.convenientTimes,
        generalDentist: this.generalDentist,
        message: this.message,
        ourPractice: this.ourPractice,
        ourWebsite: this.ourWebsite
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'http://localhost:8080/thank-you'
          }, 400)
          setTimeout(() => {
            this.patientName = ''
            this.radiographs = ''
            this.patientemail = ''
            this.patientAddress = ''
            this.phoneNumber = ''
            this.preferredDays = ''
            this.convenientTimes = ''
            this.generalDentist = ''
            this.message = ''
            this.ourPractice = ''
            this.ourWebsite = ''
          }, 1000)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
