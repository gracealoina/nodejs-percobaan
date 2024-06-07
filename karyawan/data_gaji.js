let gajiPokok = 4000000
let tunjanganJabatan = 750000
let bpjs = (2.5/100) * gajiPokok
let netGaji = gajiPokok + tunjanganJabatan - bpjs

function slipGaji (){
    let hasil=
    `gaji karyawan periode Juni 2024\n`+
    `===============================\n`+
    `gaji pokok: Rp.${gajiPokok.toLocaleString('id-ID')}\n`+
    `tunjangan jabatan: Rp.${tunjanganJabatan.toLocaleString('id-ID')}\n`+
    `potongan bpjs:-Rp.${bpjs.toLocaleString('id-ID')}\n`+
    `net gaji: Rp.${netGaji.toLocaleString('id-ID')}`
    return hasil
}

module.exports={
    cetak_slipGaji: slipGaji(),
}