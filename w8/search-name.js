const students = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
                'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
                'Olivia', 'Penelope']
let result = []

const displayResult = (limiter) =>{
    return limiter
}
const filterName = (name, key) =>{
    return name.filter(res => res.toLowerCase().indexOf(key.toLowerCase())!==-1)
}
result = filterName(students,'an');

const limiter = (input, max) => {
    let result = input.slice(0, max)
    return result
}
console.log(limiter(result,3));
