const http = require('http')
fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    // res.write('hello Node');
    // res.end()

    res.writeHead(200, {'Context-Text': 'text/html'})
    fs.readFile('app.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('error: file not found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error) {
        console.log('something went wrong')
    }else{
        console.log('server is listening on port '+ port)
    }
})