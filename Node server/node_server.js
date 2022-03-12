const http = require('http');
const fetch = require('cross-fetch');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  manage_req(req);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});

function manage_req(req){
  
  console.log(req.url);
  fetch('http://192.168.0.184:80' + req.url).then(console.log).catch(err=>{console.log(err)});

}



