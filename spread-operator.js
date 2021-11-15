let data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Breat',
    email : 'Sincere@april.biz',
    address : {
        street : 'Kulas Light',
        suite : 'Apt. 556',
        city : 'Gwenborought',
        zipcode : "123-456",
    },
    phone : "+62 123-456",
    website : 'hidegard.org'
}
let myData = {
    myName : 'Adityas Susanto',
    myEmail : 'nasusayt@gmail.com',
    myHobby : 'rebahan'
}

let mergeData = {...data, ...myData}
function printData({address:{street, city}}){
    return `
    Name    : ${myData.myName}
    Email   : ${myData.myEmail}
    Hobby   : ${myData.myHobby}
    Address : ${street}, ${city}
    `;
}
console.log(printData(mergeData));

