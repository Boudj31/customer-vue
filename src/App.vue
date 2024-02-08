<script>
import Menu from '@/components/Menu.vue';
export default {
  name: "App",
  // propriete reactive 
  data() {
    return {

    }
  },
  components: {Menu},
  // propriété calculé 
  computed : {

  },
  methods: {

  }
}
</script>

<template>
  <div>
     <!-- Navbar-->
     <Menu />
  <!-- ROUTERView -->
  <RouterView />

  </div>
 
</template>