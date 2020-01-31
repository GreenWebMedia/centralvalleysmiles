import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import AboutUs from '@/pages/about-us/about-us'
import AboutTheDoctor from '@/pages/about-the-doctor/about-the-doctor'
import OurStaff from '@/pages/our-staff/our-staff'
import MapsDirections from '@/pages/maps-directions/maps-directions'
import FinancialInsurance from '@/pages/financial-insurance/financial-insurance'
import links from '@/pages/links/links'
import OfficePoliciesMission from '@/pages/office-policies-mission/office-policies-mission'
import FirstVisit from '@/pages/first-visit/first-visit'
import PatientGallery from '@/pages/patient-gallery/patient-gallery'
import BeforeAndAfter from '@/pages/before-and-after/before-and-after'
import CommonProblems from '@/pages/common-problems/common-problems'
import OralHygiene from '@/pages/oral-hygiene/oral-hygiene'
import Emergencies from '@/pages/emergencies/emergencies'
import FoodsToAvoid from '@/pages/foods-to-avoid/foods-to-avoid'
import PatientForms from '@/pages/patient-forms/patient-forms'
import EarlyTreatment from '@/pages/early-treatment/early-treatment'
import AdultTreatment from '@/pages/adult-treatment/adult-treatment'
import TypesOfBraces from '@/pages/types-of-braces/types-of-braces'
import Invisalign from '@/pages/invisalign/invisalign'
import RetentionPhase from '@/pages/retentionphase/retentionphase'
import OrthognathicSurgery from '@/pages/orthognathic-surgery/orthognathic-surgery'
import DamonBraces from '@/pages/damon-braces/damon-braces'
import Testimonials from '@/pages/testimonials/testimonials'
import PrivacyPolicy from '@/pages/privacy-policy/privacy-policy'
import FAQ from '@/pages/faq/faq'
import RequestAppointment from '@/pages/request-appointment/request-appointment'
import ThankYou from '@/pages/thank-you/thank-you'
import Contact from '@/pages/contact/contact'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import Styleguide from '@/styleguide/styleguide'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: true,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      component: AboutUs
    },
    {
      path: '/about-the-doctor',
      name: 'About the doctor',
      navigation: true,
      component: AboutTheDoctor
    },
    {
      path: '/our-staff',
      name: 'Our Staff',
      navigation: true,
      component: OurStaff
    },
    {
      path: '/maps-directions',
      name: 'Maps Directions',
      navigation: true,
      component: MapsDirections
    },
    {
      path: '/financial-insurance',
      name: 'Financial Insurance',
      navigation: true,
      component: FinancialInsurance
    },
    {
      path: '/links',
      name: 'links',
      navigation: true,
      component: links
    },
    {
      path: '/office-policies-mission',
      name: 'Office Policies Mission',
      navigation: true,
      component: OfficePoliciesMission
    },
    {
      path: '/first-visit',
      name: 'First Visit',
      navigation: true,
      component: FirstVisit
    },
    {
      path: '/patient-gallery',
      name: 'Patient Gallery',
      navigation: true,
      component: PatientGallery
    },
    {
      path: '/before-and-after',
      name: 'Before And After',
      navigation: true,
      component: BeforeAndAfter
    },
    {
      path: '/common-problems',
      name: 'Common Problems',
      navigation: true,
      component: CommonProblems
    },
    {
      path: '/oral-hygiene',
      name: 'Oral Hygiene',
      navigation: true,
      component: OralHygiene
    },
    {
      path: '/emergencies',
      name: 'Emergencies',
      navigation: true,
      component: Emergencies
    },
    {
      path: '/foods-to-avoid',
      name: 'Foods Avoid',
      navigation: true,
      component: FoodsToAvoid
    },
    {
      path: '/patient-forms',
      name: 'Patient Forms',
      navigation: true,
      component: PatientForms
    },
    {
      path: '/early-treatment',
      name: 'Early Treatment',
      navigation: true,
      component: EarlyTreatment
    },
    {
      path: '/adult-treatment',
      name: 'Adult Treatment',
      navigation: true,
      component: AdultTreatment
    },
    {
      path: '/types-of-braces',
      name: 'Types Of Braces',
      navigation: true,
      component: TypesOfBraces
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign
    },
    {
      path: '/retentionphase',
      name: 'Retention Phase',
      navigation: true,
      component: RetentionPhase
    },
    {
      path: '/orthognathic-surgery',
      name: 'Orthognathic Surgery',
      navigation: true,
      component: OrthognathicSurgery
    },
    {
      path: '/damon-braces',
      name: 'Damon Braces',
      navigation: true,
      component: DamonBraces
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      navigation: true,
      component: Testimonials
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      navigation: true,
      component: PrivacyPolicy
    },
    {
      path: '/faq',
      name: 'FAQ',
      navigation: true,
      component: FAQ
    },
    {
      path: '/request-appointment',
      name: 'Request Appointment',
      navigation: true,
      component: RequestAppointment
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      navigation: true,
      component: ThankYou
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      component: Contact,
      children: [
        {
          path: '/contact#form',
          name: 'contact form'
        }
      ]
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
