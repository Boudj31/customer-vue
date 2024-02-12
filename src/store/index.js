import { createStore } from "vuex";
import { getAllCustomerRequest } from "@/api/customer.js";
import { registerCustomer } from "../api/customer";

const store = createStore({
  // equivalent data
  state() {
    return {
      customers: [],
      currentCustomer: null,
      isLoading: false,
      error: null,
    };
  },
  // equivalent computed
  getters: {
    getJonin(state) {
      return state.customers.filter((c) => c.role === "Jonin");
    },
    getHokage(state) {
      return state.customers.filter((c) => c.role === "Hokage");
    },
    allCustomer: (state) => state.customers,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
  // pour modifier un etat (dans state) on doit passer par une
  // mutation ! ne peuvent pas être asyncrone
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers;
    },
    SET_CURRENT_CUSTOMER(state, current) {
      state.currentCustomer = current;
    },
    SET_LOADING(state, statut) {
      state.isLoading = statut;
    },
    SET_ERRORS(state, error) {
      state.error = error;
    },
  },

  // equivalent methods
  actions: {
    // en parametre on a implicitement un objet context
    // commit appelle une mutation
    // dispatch appelle une autre action
    async getAllCustomers({ commit }) {
      // on appelle la mutation pour modifier l'etat
      commit("SET_LOADING", true);
      // promesse
      try {
        const { data } = await getAllCustomerRequest(); // pause
        commit("SET_CUSTOMERS", data);
      } catch (e) {
        commit("SET_ERRORS", e.message);
        console.log(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async registerNewCustomer({ commit }, payload) {
      commit("SET_LOADING", true);
      // promesse
      try {
        const { data } = await registerCustomer(payload); // pause
        commit("SET_CURRENT_CUSTOMER", data);
      } catch (e) {
        commit("SET_ERRORS", e.message);
        console.log(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
});

export default store;
