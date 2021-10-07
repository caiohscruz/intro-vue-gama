<template>
    <div class="review-container" v-if="reviews.length">
        <h3 >Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            <!-- solution -->
            Recommended: {{ review.recommend }}
            <!-- solution -->
        </li>
        </ul>
    </div>   
</template>

<script>
export default {
    name: "ReviewList",
    props:{
        reviews:{
            type:Array,
            required: true
        }
    },
};
</script>