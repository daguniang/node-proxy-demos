import axios from 'axios';
import { HttpsProxyAgent }  from 'https-proxy-agent';

// Create a custom proxy agent
const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:10809');

const targetUrl = "https://www.google.com";
// Create a new axios instance and set the proxy agent
const instance = axios.create({
  httpsAgent: proxyAgent,
});

// Send a request
instance.get(targetUrl)
  .then(response => {
    if(response.status === 200)
      console.log(targetUrl, response.status);
    else
      console.log(targetUrl, response.status, response.data)
  })
  .catch(error => {
    console.error(error);
  });
