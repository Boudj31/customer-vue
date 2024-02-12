<template>
  <main>
    <div class="flex my-10 justify-between">
      <h1 class="text-5xl text-secondary">My Customers</h1>
      <RouterLink to="/add" class="btn btn-secondary">
        Add customer
      </RouterLink>
    </div>

    <p>Computed {{ getName }}</p>
    <p>Methode {{ getNameMethod() }}</p>
    <button class="btn" @click="name = 'Yanis'">Changer de nom</button>
    <p v-if="isLoading">Chargement en cours</p>
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
import { getAllCustomerRequest } from "@/api/customer.js";

export default {
  components: { CustomerCard },
  data() {
    return {
      customers: [],
      isLoading: false,
      error: null,
      name: "Onizuka",
    };
  },
  mounted() {
    this.getAllCustomers();
  },
  computed: {
    getJonin() {
      return this.customers.filter((c) => c.role === "Jonin");
    },
    getHokage() {
      return this.customers.filter((c) => c.role === "Hokage");
    },
    allCustomer() {
      return this.customers;
    },
    getName() {
      console.log("Computed called");
      return this.name.toUpperCase();
    },
  },
  methods: {
    sleep(delay) {
      return new Promise((resolve) => setTimeout(resolve, delay));
    },
    getNameMethod() {
      console.log("Methode called");
      return this.name.toUpperCase();
    },
    async getAllCustomers() {
      this.isLoading = true;
      // promesse
      try {
        const { data } = await getAllCustomerRequest(); // pause
        this.customers = data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
