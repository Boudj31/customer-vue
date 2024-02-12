<template>
  <main>
    <div class="flex my-10 justify-between">
      <h1 class="text-5xl text-secondary">My Customers</h1>
      <RouterLink to="/add" class="btn btn-secondary">
        Add customer
      </RouterLink>
    </div>
    <p v-if="isLoading">Chargement en cours</p>
    <p v-if="error">Erreur : {{ error }}</p>
    <!--Boucle la liste des clients-->
    <div
      v-if="allCustomer.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:flex flex-wrap"
    >
      <CustomerCard
        v-for="customer in allCustomer"
        :customer="customer"
        :key="customer.id"
      />
    </div>
  </main>
</template>

<script>
import CustomerCard from "@/components/CustomerCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { CustomerCard },
  mounted() {
    this.getAllCustomers();
  },
  computed: {
    ...mapGetters([
      "isLoading",
      "error",
      "getJonin",
      "getHokage",
      "allCustomer",
    ]),
  },
  methods: {
    ...mapActions(["getAllCustomers"]),
  },
};
</script>

<style></style>
