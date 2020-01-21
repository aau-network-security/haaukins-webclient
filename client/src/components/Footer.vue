<template>
    <footer class="footer">
        <div class="container text-center pt-3">
            <small>Powered by Haaukins</small>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 60px;
        background-color: #211a52 !important;
        color: #fff!important;
    }
    .footer > .container {
        padding-right: 15px;
        padding-left: 15px;
    }

</style>