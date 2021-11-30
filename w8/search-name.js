// const students = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
//                     'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith','Olivia', 'Penelope']
// let result = []


// const filterName = (name, key) =>{
//     return name.filter(arr => arr.toLowerCase().indexOf(key.toLowerCase())!==-1)
//     // return name.filter(arr => arr.toLowerCase().indexOf(key.toLowerCase()))
// }
// result = filterName(students,'pe');

// const displayName = (input, max) => {
//     let result = input.slice(0, max)
//     return result
// }
// console.log(displayName(result,3));

const students = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];
  
  const limitData = (data, limit) => {
    const dataLimit = data.slice(0, limit);
    console.log(dataLimit);
  }
  
  const searchName = (keyword, limit, callback) => {
    const filterData = students.filter((item) => {
      return item.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    });
    callback(filterData, limit);
  }
  
  searchName('an', 3, limitData);