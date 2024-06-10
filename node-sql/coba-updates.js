const mysql= require('mysql2')
//koneksi ke database mysql
const database = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'xdb_belajar_database',
})

//menyambungkan atau membuka koneksi
database.connect

try {
    database.query(
    ` UPDATE karyawan 
      SET nama= 'CR7', alamat = 'Arab'
      WHERE id=9`,
   

    function(errorSql,hasil){
        if(errorSql) throw errorSql
        //console.log(hasil)
        if (hasil.affectedRows>0){
            console.log(`berhasil edit ${hasil.affectedRows} data`)
        }else{
            console.log(`gagal edit data`)
        }
    }

)
database.end()
}
     catch (error) {
        console.log(error)
}