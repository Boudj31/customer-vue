<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <div class="flex gap-3">
                <div class="avatar">
                    <div class="w-24 rounded">
                      <img :src="`https://api.dicebear.com/7.x/adventurer/svg?seed=${customer.id}`" />
                    </div>
                  </div>
                <h2 class="card-title">{{`${customer.firstName} ${customer.lastName}`}}</h2>

            </div>
          <p>{{customer.bio}}</p>
          <p>Email : <span class="font-thin">{{customer.email}}</span></p>
          <p>Pseudo : <span class="font-thin">{{customer.username}}</span></p>
          <p>Role:{{customer.role}}</p>
        </div>
      </div>
</template> 

<script>
export default {
    props: {
        customer : {
            type : Object
        }
    }


}
</script>

<style>

</style>