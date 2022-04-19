const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(request);
    response.end();
});


const PORT = 4000;
server.listen(PORT);