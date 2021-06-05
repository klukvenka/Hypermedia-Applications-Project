<template>
    <div class="text-center">
        <h2>{{heading}}</h2>
        <p>{{subheading}}</p>
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
        }
    },
}
</script>
