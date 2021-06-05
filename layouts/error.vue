<template>
    <div id="root">
        <Navbar />
        <div class="error">
            <div class="text-center">
                <h2>Oops...</h2>
                <h3 class="light-heading">Seems like there is some error in your request</h3>
                <h4 class="light-heading">Go to <a href="/">home</a></h4>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.error {
    height: 90vh;
    position: relative;
    padding-top: 60px;
    
}
.light-heading {
    text-align: center;
}

</style>