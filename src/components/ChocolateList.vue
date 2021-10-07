<template>
    <div class="card-group">
        <ChocolateCard :chocolate="chocolate" v-for="chocolate in chocolates" :key="chocolate.id"/>
    </div>
</template>

<script>
import ChocolateCard from './ChocolateCard.vue';

export default {
    components: {
        ChocolateCard,
    },
    created(){
        this.$store.dispatch("fetchChocolates")
    },
    computed:{
        chocolates(){
            return this.$store.state.chocolates;
        }
    }
}
</script>

<style>

</style>