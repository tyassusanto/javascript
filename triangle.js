  function printTriangle(a){
    let triangle ="";
    if(typeof(a)!='number'){
      return `Data is not number`
    }
    else{
      for(i=a;i>0;i--){
        for(j=1;j<=i;j++){
          triangle+=j;
        }
        triangle+='\n';
    }
    return triangle;
    }
  }
  console.log(printTriangle(5));