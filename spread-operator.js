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
    name : 'Adityas Susanto',
    email : 'nasusayt@gmail.com',
    hobby : 'rebahan'
}

let mergeData = {...data, ...myData}
function printData({address:{street, city}})
{
    return `
    Name    : ${myData.name}
    Email   : ${myData.email}
    Hobby   : ${myData.hobby}
    Address : ${street}, ${city}
    `;
}
console.log(printData(mergeData));
// console.log(mergeData);

