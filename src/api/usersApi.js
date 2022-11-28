import client from "./client";

const login = (reqData) => client.post("users/login", reqData);



export default {
    login
};