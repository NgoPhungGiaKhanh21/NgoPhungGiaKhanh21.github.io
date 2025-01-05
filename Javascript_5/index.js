    function submitForm(){
        const fullName = document.getElementById('fullName').value.trim();
        const birth = document.getElementById('birth').value.trim();
        const age = document.getElementById('age').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const error = document.getElementById('error');

        if(!fullName || !birth || !age || !gender || !phone){
            error.textContent = "Vui lòng nhập đầy đủ các thông tin";
            return;
        }
        error.textContent = '';
        document.getElementById('outputFullName').textContent = fullName;
        document.getElementById('outputBirth').textContent = birth;
        document.getElementById('outputAge').textContent = age;
        document.getElementById('outputGender').textContent = gender;
        document.getElementById('outputPhone').textContent = phone;
    }