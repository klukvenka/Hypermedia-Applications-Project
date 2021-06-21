<template>
    <div class="heading text-center">
        <h2>{{heading}}</h2>
        <h3>{{subheading}}</h3>
        <br>
        <p>{{description}}</p>
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
