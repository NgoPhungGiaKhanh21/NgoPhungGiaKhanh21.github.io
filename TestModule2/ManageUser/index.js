function login(){
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if(!email || !password){
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        alert(`Xin chào ${user.first_name} ${user.last_name}`);
    }else{
        alert("Thông tin tài khoản không chính xác");
    }
}

function register(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPass').value;

    if(!firstName || !lastName || !email || !password){
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    if(users.some(u => u.email === email)){
        alert("Email này đã có tài khoản");
        return;
    }

    const newUser = {
        id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }
    users.unshift(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký thành công");
}

function searchUser(){
    const keyword = document.getElementById('key').value.toLowerCase();
    const result = keyword ? users.filter(u => u.first_name.toLowerCase().includes(keyword) || u.last_name.toLowerCase().includes(keyword) || u.email.toLowerCase().includes(keyword)) : users;

    const usersList = document.getElementById('users');
    usersList.innerHTML = result.map(u => `<li>${u.id} - ${u.first_name} ${u.last_name} - ${u.email}</li>`).join('');
}

function viewPost(){
    const postId = parseInt(document.getElementById('postId').value);
    const post = posts.find(p => p.id === postId);
    if(!post){
        alert("Không tìm thấy bài viết nào");
        return;
    }

    const postCreator = users.find(u => u.id === post.user_id);
    document.getElementById('postContent').innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <img src="${post.image}" alt="Post Image" style="width:100%">
        <p>Người tạo: ${postCreator ? postCreator.first_name + ' ' + postCreator.last_name : 'Không xác định'}</p>
        <p>User ID: ${post.user_id}</p>
        <p>Created Date: ${post.created_at}</p>
        <p>Updated Date: ${post.updated_at}</p>
    `;
}

function searchPostByEmail(){
    const email = document.getElementById('searchEmail').value;
    const user = users.find(u => u.email === email);
    if(!user){
        alert("Không tìm thấy người dùng");
        return;
    }
    const userPosts = posts.filter(p => p.user_id === user.id);
    document.getElementById("userPostList").innerHTML = userPosts.map(p => `<li>${p.id} - ${p.title}</li>`).join('');
}

function showContent(selectionId){
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(selectionId).style.display = 'block';
}

window.onload = function() {
    const storedUsers = localStorage.getItem('users');
    if(storedUsers) {
        users = JSON.parse(storedUsers);
    }
};
