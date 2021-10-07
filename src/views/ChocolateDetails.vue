<template>
  <div class="card mb-3" v-if="chocolate">
  <img class="card-img-top" :src="image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{chocolate.name}}</h5>
    <p class="card-text">{{chocolate.description}}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</template>

<script>

export default {
    props: ["id"],
    data(){
        return{
            chocolate: null,
        }
    },
    created(){
        this.chocolate = this.store.getters.getChocolate(this.id);
    },
    computed:{
        image(){
            return require(`../assets/${this.chocolate.image}.jpg`)
        }
    }
}
</script>

<style>

</style>