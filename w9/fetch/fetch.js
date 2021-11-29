import fetch from 'node-fetch';

const getNameData = () =>{
    fetch (`https://jsonplaceholder.typicode.com/users/`)
    .then((response)=>{
        (response)
        return response.json();
    }).then((data)=>{
        data.map((object)=>{
            console.log(`${object.name}`)
        })
    })
    .catch((err)=>{
        console.log(new Error(err))
    })
}
getNameData()