"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var https_proxy_agent_1 = require("https-proxy-agent");
// Create a custom proxy agent
var proxyAgent = new https_proxy_agent_1.HttpsProxyAgent('http://127.0.0.1:10809');
var targetUrl = "https://www.google.com";
// Create a new axios instance and set the proxy agent
var instance = axios_1.default.create({
    httpsAgent: proxyAgent,
});
// Send a request
instance.get(targetUrl)
    .then(function (response) {
    if (response.status === 200)
        console.log(targetUrl, response.status);
    else
        console.log(targetUrl, response.status, response.data);
})
    .catch(function (error) {
    console.error(error);
});
