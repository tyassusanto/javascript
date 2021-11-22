const sortNumber = (a, b) =>{
    return a-b
}
const filterNumber = (nilaiAwal, nilaiAkhir, data) =>{
    if ((typeof nilaiAwal !== "number") || (typeof nilaiAkhir !== "number")){
        return `Masukan nilai`
    }else if (nilaiAwal > nilaiAkhir){
        return `Nilai akhir harus lebih besar`
    }else{
        let key = data.filter((value) =>{
            if (value > nilaiAwal && value < nilaiAkhir){
                return true;
            }else{
                return false;
            }
        })
        let filtered = key.sort(sortNumber)
        return filtered
    }
}
console.log(filterNumber(5, 20, [2, 25, 4, 14, 17, 30, 8]));
