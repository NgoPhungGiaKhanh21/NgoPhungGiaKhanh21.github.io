function TamGiac(a, b, c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }else{
        return false;
    }
}
console.log(TamGiac(10, 11, 12));
console.log(TamGiac(1, 2, 3));
console.log(TamGiac(8, 8 ,8));