<template>


    <div class="bg-dark">
            <b-navbar toggleable="lg" type="dark" class="container">
                <b-navbar-brand href="/">
                    <img src="../assets/dashboard-logo.png" width="40" height="40" class="d-inline-block align-top" alt="">
                    <span class="logo-text">Administration</span>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" class="mr-auto" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="/challenges">Challenges</b-nav-item>
                        <b-nav-item href="/vms">VMs</b-nav-item>
                        <b-nav-item href="/graphs">Graphs</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-lg-auto">
                        <b-nav-item href="/login">Logout</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .bg-dark {
        background-color: #211a52 !important;
    }
    .logo-text{
        vertical-align: middle;
        padding-top: 7px;
        padding-left: 7px;
    }
</style>