function average (a,b,c,d){
    const sum=a+b+c+d;
    const avg=sum/average.length;

    if(avg >= 90){
                return `${avg} Grade A`
            }
            else if(avg >= 80){
                return `Average Score is : ${avg}
            Grade : B`
            } 
            else if(avg >= 70){
                return `Average Score is : ${avg}
                Grade : C`
            } 
            else if(avg >= 60){
                return `Average Score is : ${avg}
                Grade : D`
            } 
            else{
                return `Average Score is : ${avg}
                Grade : E`
            }
}
console.log(average(1,1,1,1));