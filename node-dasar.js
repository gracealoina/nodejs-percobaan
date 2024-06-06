let nama='aji'
let alamat='jakarta'
let a ='50'
let b='30'
let c= a*b

//menggunakan modul http yang sudah disiapkan oleh node.js
//modul http berfungsi untuk
//membuat komputer kita bisa diakses dari luar
//(dengan menggunakan internet)
//localhost adalah replika (dummy) dari situs web asli tapi hanya kalan dikomputer kita
// untuk keperluan pengembangan/pembuatan aplikasi
const http= require('http')

let server = http.createServer((req,res) => {
    //mendefinisikan status code dan tipe konten yg ingin diberikan ke user
    console.log('tes nyalain server')
    res.writeHead(200, {'Content-Type': 'text/html'})

    //isi dari konten
    res.end('<h1>'+nama +'</h1>' + ' '+ alamat + ' ' +c + 'm')
})

//konfigurasi port yang ingin digunakan
//kita pakai port yang free
//port 80 sudah digunakan untuk software lain
server.listen (3000, ()=>{
    console.log('server sudah siap jalan')

})