const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
console.log('mulai');
cekHariKerja('senin')
.then(res => console.log(`${res} termasuk hari kerja`))
.catch(err => console.log(err))
.finally(()=>console.log('selesai'))

// // Penejelasan then dan catch : 
// // Method .then digunakan untuk merepresentasikan hasil keberhasilan dari pada response pada 
// // promise
// // Mehtod .catch digunakan untuk mereprentasihan hasil jika promise gagal, atau data yg
// // kita panggil tidak ada di dalam data awal
    
// const tcHariKerja = async(day) => {
//     try {
//         const hariKerja = await cekHariKerja(day)
//         console.log(hariKerja)
//     } catch (err) {
//         console.log(err)
//     }
// }
// console.log('mulai')
// tcHariKerja('senin')

// // Penjelasan try dan catch : 
// // try digunakan untuk menangkap hasil dari resolve pada promise
// // catch digunakan untuk menangkap hasil dari reject