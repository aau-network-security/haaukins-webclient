<template>
    <router-view></router-view>
</template>

<script>

    export default {
        name: 'app'
    };
    export const REST_API_ENDPOINT = window.location.protocol+"//"+window.location.hostname
    export const REST_API_PORT = "8090"
    export const WEBSOCKET_PORT = "8091"
</script>
