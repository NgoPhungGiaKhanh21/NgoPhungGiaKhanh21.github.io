console.log("1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.");
function printSlogan(slogan){
    let counter = 1;
    setInterval(function(){
        console.log(slogan + " " + counter);
        counter++;
    }, 5000);
}

printSlogan("Hello world");

console.log("2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.");
let texts = ["Hello", "Hi", "Sorry", "One", "Two"];
let textsLength = texts.map(text => text.length);
console.log(textsLength);