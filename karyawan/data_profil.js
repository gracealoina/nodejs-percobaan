let nama ='aji kowiyu'
let alamat='pluit, jakarta utara'

function biodata (){
    return `nama: ${nama} \n alamat:${alamat}`
}

//console.log(nama+' '+alamat)
module.exports={
    nama,
    alamat,
    cetakbiodata: biodata()
}