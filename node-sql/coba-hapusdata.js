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
    ` DELETE FROM karyawan 
      WHERE id=10`,
   

    function(errorSql,hasil){
        if(errorSql) throw errorSql
        //console.log(hasil)
        if (hasil.affectedRows>0){
            console.log(`berhasil hapus ${hasil.affectedRows} data`)
        }else{
            console.log(`gagal hapus data`)
        }
    }

)
database.end()
}
     catch (error) {
        console.log(error)
}