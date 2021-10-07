<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{chocolate.name}}</h5>
    <p class="card-text">{{chocolate.description}}</p>
    <router-link :to="{name: 'ChocolateDetails', params: {id: chocolate.id}}" class="btn btn-primary">
      Go somewhere
    </router-link>
  </div>
</div>
</template>

<script>
export default {
    name: "ChocolateCard",
    props:{
        chocolate: Object,
    },
    computed:{
        image(){
            return require(`../assets/${this.chocolate.image}.jpg`)
        },
        route(){
          return `/chocolate/${this.chocolate.id}`
        }
    }
}
</script>

<style>

</style>