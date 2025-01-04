function NamNhuan(year){
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function CheckDate(day, month, year){
    if(month < 1 || month > 31){
        return false;
    }

    const dayInMonth = [31, (NamNhuan(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day < 1 || day > dayInMonth[month - 1]){
        return false;
    }
    return true;
}
console.log(CheckDate(29, 2, 2023));
console.log(CheckDate(28, 4, 2004));
console.log(CheckDate(30, 6, 2024));