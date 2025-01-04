//Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
let doituong = {
    name: "Tom",
    age: 20,
    address: "Đồng Nai",
    sex: "Nam",
    hobbies: ['Football', 'Music', 'Game'],
    height: 175,
    weight: 70,
    status: "single",
    phone: "0123456789"
}

//Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
let bangai = {
    name: "Rose",
    age: 25,
    totBung: 9,
    nhaGiau: true
}

//Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
if(doituong.age > 20 && bangai > 20){
    console.log("Tầm này cưới được rồi");
}else{
    console.log("Chờ thêm chút nữa");
}