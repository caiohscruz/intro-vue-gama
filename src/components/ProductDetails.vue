<template>
    <ul>
        <li v-for="detail in details" :key="detail.id">{{detail.type}}</li>
    </ul>    
</template>

<script>
export default {
    name: "ProductDetails",
    props:{
        details:{
            type: Array,
            required: true
        }
    }
};
</script>