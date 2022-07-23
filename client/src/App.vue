<template>
    <router-view></router-view>
</template>

<script>

    export default {
        name: 'app'
    };
    export const API_ENDPOINT = window.location.protocol+"//"+window.location.hostname+":8090"
    export const WEBSOCKET_ENDPOINT = "wss://"+window.location.hostname+":8091"
</script>
