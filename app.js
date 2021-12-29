const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
    res.end(`<h1> Welcome to my websites :)</h1>`)
    }
    if (req.url == '/about'){
    res.end('here is our websites')
    }
    res.end(`<h1>Oops!</h1>
    <p> We cant find what are you looking for.</p>
    <a herf ="/"> Home</a>`)

})

server.listen(10001)