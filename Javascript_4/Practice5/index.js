// Khởi tạo kho hàng
const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Dung Tien',
    items: [
        { id: 1, name: 'Product 1', category: 'Furniture', price: 20 },
        { id: 2, name: 'Product 2', category: 'Device', price: 110 },
        { id: 3, name: 'Product 3', category: 'Cloth', price: 2 },
        { id: 4, name: 'Product 4', category: 'Electronics', price: 250 },
        { id: 5, name: 'Product 5', category: 'Kitchen', price: 35 },
        { id: 6, name: 'Product 6', category: 'Toys', price: 15 },
    ]
};

// Hiển thị thông tin kho hàng
function showStorage() {
    console.log(`Storage Name: ${storage.name}`);
    console.log(`Address: ${storage.address}`);
    console.log(`Owner: ${storage.owner}`);
    console.log("Items in storage:");
    storage.items.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Category: ${item.category}, Price: ${item.price}`);
    });
}

// Sửa thông tin kho hàng
function updateStorage() {
    storage.name = prompt("Enter new name:");
    storage.address = prompt("Enter new address:");
    storage.owner = prompt("Enter new owner:");
    console.log("Thông tin kho hàng đã được cập nhật!!!");
    showStorage();
}

// Tạo mặt hàng trong kho
function createItem() {
    const id = parseInt(prompt("Enter new ID:"));
    if (storage.items.some(item => item.id === id)) {
        console.log("ID này đã tồn tại. Nhập ID khác!!!");
        return;
    }
    const name = prompt("Enter new name:");
    const category = prompt("Enter new category:");
    const price = parseFloat(prompt("Enter new price:"));
    storage.items.push({ id, name, category, price });
    console.log("Mặt hàng đã được thêm!!!");
    showStorage();
}

// Tìm kiếm mặt hàng
function searchItem() {
    const find = prompt("Nhập mặt hàng cần tìm (ko nhập gì nếu muốn xem tất cả):");
    const result = find ? storage.items.filter(item => item.name.toLowerCase().includes(find.toLowerCase())) : storage.items;

    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:");
        result.forEach(item => {
            console.log(`ID: ${item.id}, Name: ${item.name}, Category: ${item.category}, Price: ${item.price}`);
        });
    } else {
        console.log("Không tìm thấy mặt hàng nào.");
    }
}

// Xóa mặt hàng
function deleteItem() {
    const id = parseInt(prompt("Nhập ID mặt hàng cần xóa:"));
    const index = storage.items.findIndex(item => item.id === id);
    if (index === -1) {
        console.log("Không tìm thấy mặt hàng. Vui lòng nhập lại!!!");
        return;
    }
    storage.items.splice(index, 1);
    console.log("Mặt hàng đã được xóa.");
    showStorage();
}

// Menu chính
function main() {
    let action;
    do {
        action = prompt(
            "Nhập yêu cầu cần thực hiện:\n1. Cập nhật thông tin kho hàng\n2. Thêm mặt hàng\n3. Tìm kiếm mặt hàng\n4. Xóa mặt hàng\n0. Thoát"
        );
        switch (action) {
            case '1':
                updateStorage();
                break;
            case '2':
                createItem();
                break;
            case '3':
                searchItem();
                break;
            case '4':
                deleteItem();
                break;
            case '0':
                console.log("Thoát chương trình!!!");
                break;
            default:
                console.log("Yêu cầu không hợp lệ. Vui lòng nhập lại!");
        }
    } while (action !== '0');
}

main();