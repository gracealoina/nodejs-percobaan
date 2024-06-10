const http = require('http')
const URL = require ('url')
const port=3000

let server = http.createServer(function (request,respon) {
    if  (request.url=='/'){
        respon.writeHead(200, {'Content-Type': 'text/html'})
        respon.write('<h1>Halaman Utama</h1>')
        respon.end()
    }
    else if (request.url=='/beranda'){
        respon.writeHead(200, {'Content-Type': 'text/html'})
        respon.write('<h1>Halaman Utama</h1>')
        respon.end()
    
    }
      
    else{
        respon.writeHead(404, {'Content-Type': 'text/html'})
        respon.write('<h1>File tidak ada !</h1>')
        respon.end()
    }
 })
    

server.listen (port, ()=>{
    console.log(`server sudah siap on, buka http://localhost:${port}`) //tanda (`) untuk memanggil variabel didalam string

})