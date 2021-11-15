
function printTriangle(a){
  let triangle='';
  if(typeof(a)!=='number'){
    console.log('Data is not Number');
  }
  else{
    for(i=a;i>0;i--){
      for(j=1;j<=i;j++){
        triangle+=j+' '
      }
      console.log(triangle);
      triangle='';
    }
  }
}
printTriangle(2);