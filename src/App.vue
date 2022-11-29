<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <Section />
    <Footer />
    <v-content class="mx-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Section from '@/components/Section.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Section, Footer },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>