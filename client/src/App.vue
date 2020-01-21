<template>
    <router-view></router-view>
</template>

<script>
    import {DaemonClient} from "daemon_grpc_web_pb"
    export default {
        name: 'app'
    };
    export const daemonclient = new DaemonClient("http://localhost:8000", null, null);
</script>