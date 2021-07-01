const http = require('http');
console.log("Hello server");

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du new aaserveur !');
});

server.listen(process.env.PORT || 3000);