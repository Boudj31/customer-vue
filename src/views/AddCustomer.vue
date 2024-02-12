<template>
  <main class="space-y-3">
    <h1 class="text-5xl font-bold">Add Customer</h1>
    <form @submit.prevent="onSubmit" novalidate>
      <!--USERNAME -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What is your username? *</span>
        </div>
        <input
          v-model="username"
          type="text"
          id="username"
          :class="usernameError ? 'border-red-700' : ''"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <div role="alert" class="text-red-700 text-sm italic">
          {{ usernameError }}
        </div>
      </label>
      <!--EMAIL -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What is your email? *</span>
        </div>
        <input
          v-model="email"
          type="email"
          :class="emailError ? 'border-red-700' : ''"
          id="email"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <div role="alert" class="text-red-700 text-sm italic">
          {{ emailError }}
        </div>
      </label>
      <!--PASSWORD -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What is your password?</span>
        </div>
        <input
          v-model="password"
          :class="passwordError ? 'border-red-700' : ''"
          type="password"
          id="password"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <div role="alert" class="text-red-700 text-sm italic">
          {{ passwordError }}
        </div>
      </label>
      <!--FIRSTNAME -->

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What is your firstName? *</span>
        </div>
        <input
          v-model="firstName"
          :class="firstNameError ? 'border-red-700' : ''"
          type="text"
          id="firstName"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
        <div role="alert" class="text-red-700 text-sm italic">
          {{ firstNameError }}
        </div>
      </label>
      <!--LASTNAME -->

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">What is your lastName?</span>
        </div>
        <input
          v-model="lastName"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </label>
      <!--ROLE -->
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Pick the best role *</span>
        </div>
        <select
          v-model="role"
          id="role"
          :class="roleError ? 'border-red-700' : ''"
          className="select select-bordered"
        >
          <option disabled selected>Pick one</option>
          <option value="Anbu">Anbu</option>
          <option value="Jonin">Jonin</option>
          <option value="Genin">Genin</option>
          <option value="Hokage">Hokage</option>
        </select>
        <div role="alert" class="text-red-700 text-sm italic">
          {{ roleError }}
        </div>
      </label>

      <!--BIO -->
      <label className="form-control">
        <div className="label">
          <span className="label-text">Your bio</span>
        </div>
        <textarea
          v-model="bio"
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
      </label>

      <button
        :disabled="store.getters.isLoading"
        class="btn btn-primary mt-3"
        type="submit"
      >
        Save
        <span
          v-show="store.getters.isLoading"
          class="loading loading-ball loading-sm"
        ></span>
      </button>
    </form>
  </main>
</template>

<script setup>
// je repasse en composition API car vee-validate ne fonctionne pas ou mal en option API
import { registerCustomer } from "../api/customer";
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toast } from "vue-sonner";
import { toTypedSchema } from "@vee-validate/zod";
import { useStore } from "vuex";

// en composition , on a pas access a mapActions, mapGetters, mapState
// on utilise useStore pour acceder a store
const store = useStore();

// zod schema : pour valider les données
const schema = z.object({
  username: z
    .string({ required_error: "Le nom est requis" })
    .min(3, { message: "Le nom doit contenir au moins 3 caractères" })
    .max(50, { message: "Le nom doit contenir au maximum 50 caractères" })
    .trim()
    .toLowerCase(),
  email: z
    .string({ required_error: "Le email est requis" })
    .email({ message: "Le email doit être valide" })
    .trim(),
  firstName: z.string({ required_error: "Le prenom est requis" }).max(10, {
    message: "Le phone doit contenir au maximum 10 caractères",
  }),
  password: z.string({ required_error: "Le password est requis" }).trim(),
  role: z.string({ required_error: "Le role est requis" }),
  bio: z.string().optional(),
  lastName: z.string().optional(),
});

// on associe le schema a notre formulaire
const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
});

// on utilise useField pour chaque champ du formulaire
const { value: username, errorMessage: usernameError } = useField("username");
const { value: email, errorMessage: emailError } = useField("email");
const { value: role, errorMessage: roleError } = useField("role");
const { value: firstName, errorMessage: firstNameError } =
  useField("firstName");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: bio } = useField("bio");
const { value: lastName } = useField("lastName");

const onSubmit = handleSubmit(async (values) => {
  // values est un objet avec les valeurs du formulaire
  if (values) {
    try {
      //await registerCustomer(values); // without vuex
      await store.dispatch("registerNewCustomer", values); // with vuex
      console.log(values);
      toast.success(`Customer ${values.username} added successfuly !`);
      // on reset le formulaire
      resetForm();
    } catch (e) {
      toast.error(e.text);
    }
  }
});
</script>

<style></style>
