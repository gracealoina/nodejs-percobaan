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
    `INSERT INTO karyawan 
    (nama, alamat, no_telepon, gol_darah, jenis_kelamin, departemen_id, jabatan_id)
    VALUES 
    ('Ronaldo','Jakarta', '0812999000', 'A','L',1,2),
    ('Naruto','Bandung', '0712999000', 'A','L',1,2)`,

    function(errorSql,hasil){
        if(errorSql) throw errorSql
        //console.log(hasil)
        if (hasil.affectedRows>0){
            console.log(`berhasil insert ${hasil.affectedRows} data`)
        }else{
            console.log(`gagal menambah data`)
        }
    }

)
database.end()
}
     catch (error) {
        console.log(error)
}