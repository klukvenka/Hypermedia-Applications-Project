<template>
    <div class="heading text-center">
        <h2>{{heading}}</h2>
        <h3>{{subheading}}</h3>
        <br>
        <h5 class="light-heading">{{description}}</h5>
    </div>
    
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: ''
        },
        subheading: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
</style>
