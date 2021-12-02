import axios from "axios";

export const API = axios.create({
    baseURL: "",
    withCredentials: false,
    headers: {
        Authorization: "Client-ID _MZ1qoDTonwMB7EYtO7ZmetQQbJqoAPDEOvv52OyrYM",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});