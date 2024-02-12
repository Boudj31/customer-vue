<script>
import Menu from "@/components/Menu.vue";
import { Toaster } from "vue-sonner";
export default {
  name: "App",
  // propriete reactive
  data() {
    return {};
  },
  components: { Menu, Toaster },
  // propriété calculé
  computed: {},
  methods: {},
};
</script>

<template>
  <div>
    <Toaster theme="light" position="bottom-right" />
    <!-- Navbar-->
    <Menu />
    <!-- ROUTERView -->

    <div class="container mx-auto px-3">
      <RouterView />
    </div>
  </div>
</template>
