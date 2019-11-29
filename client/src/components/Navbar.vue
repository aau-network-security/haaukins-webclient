<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container">
            <a href="/" class="navbar-brand p-0 font-weight-bold mr-2">
                <img src="../assets/dashboard-logo.png" width="40" height="40" class="d-inline-block align-top" alt="">
                <span class="logo-text">Administration</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#base-navbars" aria-controls="base-navbars" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="base-navbars">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="/challenges">Challenges</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/vms">VMs</a>
                    </li>

                </ul>

                <ul class="navbar-nav ml-md-auto d-block d-sm-flex d-md-flex">
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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