<!--
Author: Sairaghav Venkataraman
Description:
This Heading component accepts heading, subheading and description parameters to be displayed in order of heading style
-->
<template>
    <div class="heading text-center">
        <h2>{{heading}}</h2>
        <h3>{{subheading}}</h3>
        <br>
        <p>{{description}}</p>
    </div>
    
</template>

<script>
//Define default value and type of props to be passed from other components
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
