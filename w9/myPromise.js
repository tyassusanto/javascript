// Program 1

const carBrand = (car) =>
    new Promise((berhasil, gagal) => {
        setTimeout(() => {
            const carData = ["Honda","Toyoya","Nissan","Mazda","Mitsubishi","Lexus",]
            let cek = carData.find((item) => {
                return item == car;
            })
            if (cek) {
                berhasil(cek);
            } else {
                gagal(new Error("Hanya tersedia merk Jepang"));
            }
        }, 2000)
    })

console.log('Mulai');
carBrand("Honda")
    .then((result) => {
        console.log(`${result} merupakan kendaraan pabrikan asal Jepang`);
        // console.log(result)
    })
    .catch((error) => {
        console.log(error);
    });


// Program 2    

// const carBrand = (car) =>
//     new Promise((berhasil, gagal) => {
//         setTimeout(() => {
//             const carData = ["Mercy","BMW","Volvo","Ferrari","Mini","Scania",]
//             let cek = carData.find((item) => {
//                 return item == car;
//             })
//             if (cek) {
//                 berhasil(cek);
//             } else {
//                 gagal(new Error("Hanya tersedia merk Eropa"));
//             }
//         }, 2000)
//     })


// carBrand
//     const tcBrand = async(car) => {
//     try {
//         const eruopeCar = await carBrand(car)
//         console.log(eruopeCar)
//     } catch (err) {
//         console.log(err)
//     }
// }
// console.log('mulai')
// tcBrand('BMW')