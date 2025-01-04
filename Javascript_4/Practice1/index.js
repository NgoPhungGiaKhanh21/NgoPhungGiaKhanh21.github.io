function PTB2 (a, b, c){
    if(a == 0){
        throw new Error("a ko đc bằng 0");
    } 

    let delta = b * b - 4 * a * c;

    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }else if(delta == 0){
        let x = -b / (2 * a);
        return [x];
    }else{
        return [];
    }
}

console.log(PTB2(1, -3, 2));
console.log(PTB2(1, 2, 1));
console.log(PTB2(1, 0, 1));
console.log(PTB2(0, 1, 2));