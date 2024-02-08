<template>
    <nav class="navbar bg-base-300 mb-5">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-base-100 btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
              <li><RouterLink to="/">Homepage</RouterLink></li>
              <li><RouterLink to="/customers">Customers</RouterLink></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost text-xl">DaCustomer</a>
        </div>
       
      </nav>
  
</template>

<script>
export default {

}
</script>

<style>

</style>