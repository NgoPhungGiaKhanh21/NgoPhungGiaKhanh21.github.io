console.log("1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.");
function hello(name){
    console.log("Hello world, " + name);
}
hello("Tom");

console.log("2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2.");
function calculate(a = 1, b = 1){
    return Math.pow(a + b, 2);
}
const value = calculate(10, 12);
console.log(value);

console.log("3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.");
function input(){
    let a;
    do{
        a = parseInt(prompt("Nhập vào một số a (a > 0)"));
    }while(a <= 0 || isNaN(a));
    console.log(`Giá trị số vừa nhập ${a}`);
}
input();