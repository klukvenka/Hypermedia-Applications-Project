<!--
Author: Sairaghav Venkataraman
Description: 
Defines the common error page for all errors
-->
<template>
    <div id="root">
        <Navbar />
        <div class="content error">
            <div class="text-center">
                <h2>Oh no!</h2>
                <h3 class="light-heading">Seems like there is some error in your request</h3>
                <h4 class="light-heading">Go to <a href="/">home</a></h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
/*Define height and padding for main content of error page*/
.error {
    height: 100vh;
    padding-top: 60px;
    
}
/*Over-ride light-heading in default.vue for center justify text */
.light-heading {
    text-align: center;
}

</style>