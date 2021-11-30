const sortFiltered = (a, b) =>{
    return a-b
}
const filterNumber = (nilaiAwal, nilaiAkhir, data) =>{
    if((typeof nilaiAwal !== "number") || (typeof nilaiAkhir !== "number")){
        return `Input Harus Angka`
    }else if (nilaiAwal > nilaiAkhir){
        return `Nilai akhir harus lebih besar dari nilai awal`
    }else if(data.length <= 5){
        return `Minimal panjang array harus 6`
    }
    else{
        let key = data.filter((arr) =>{
            if (arr > nilaiAwal && arr < nilaiAkhir){
                return true;
            }else{
                return false;
            }
        })
        let filtered = key.sort(sortFiltered)
        return filtered
    }
}
console.log(filterNumber(5, 20 , [2, 25, 4, 14, 17, 30, 8])); // sesuai
console.log(filterNumber(1, 2 , [2, 25, 4, 14, 17, 30, 8])); // data tidak ada 
console.log(filterNumber(5, 20 , [2, 25, 4, 14, 17])); // data harus minimal 6
console.log(filterNumber(21, 20 , [2, 25, 4, 14, 17, 30, 8])); // data awal harus lenih besar