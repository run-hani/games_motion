<template>
  <div id="app" class="wrap_games">
    <app-header></app-header>

      <router-view/>
      <hr class="hide" />

    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/common/Header'
import AppLnb from '@/components/common/Lnb'
import AppFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppLnb,
    AppFooter
  },
  computed: {

  },
  created () {
  
  }
}
</script>

<style>

</style>
