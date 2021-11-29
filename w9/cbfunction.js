const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January','Ferbruary','March','April','May','Juni','July','August'
        ,'September','Oktober','November','Desember',];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    }, 4000)
}   
console.log('mulai');
const print = ((er, data) => {
    if (er == null) {
        const result = data;
        result.map((item) => {
            console.log(item)
        })
    } else {
        console.log(er)
    }
})
getMonth(print)