const CryptoJS = require("crypto-js");
let result = []
let data = [{email : 'kepencet@mail.com', pw : 'masihsama'}]
let enkrip = ({data}) =>{
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data),'secret key').toString();
    return ciphertext
}
console.log(enkrip({data}));
result = enkrip({data})


let dekrip = (result) =>{
    let bytes = CryptoJS.AES.decrypt(result,'secret key');
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData
}
console.log(dekrip(result));
