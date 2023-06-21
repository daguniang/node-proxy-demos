"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https_proxy_agent_1 = require("https-proxy-agent");
var node_fetch_1 = require("node-fetch");
var proxyUrl = 'http://127.0.0.1:10809';
var proxyAgent = new https_proxy_agent_1.HttpsProxyAgent(proxyUrl);
var targetUrl = "https://www.google.com";
//const targetUrl = "https://www.baidu.com"
var requestOptions = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    agent: proxyAgent, // 使用代理的agent
};
var res = await (0, node_fetch_1.default)(targetUrl, requestOptions);
if (res.ok) {
    console.log(res.url, res.status);
}
else {
    console.log(res);
}
