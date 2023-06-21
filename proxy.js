import { HttpsProxyAgent } from 'https-proxy-agent';
import fetch from 'node-fetch';

const proxyUrl = 'http://127.0.0.1:10809'; 
const proxyAgent = new HttpsProxyAgent(proxyUrl);


const targetUrl = "https://www.google.com"

//const targetUrl = "https://www.baidu.com"

const requestOptions = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
  },
  agent: proxyAgent, // 使用代理的agent
};

const res = await fetch(targetUrl, requestOptions);

if(res.ok){
    console.log(res.url, res.status)
}else{
    console.log(res)
}
