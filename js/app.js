let demoArray = [];

function createArray() {
    demoArray = addItemArray(demoArray);
    document.getElementById('array-input').innerHTML = "Mảng được tạo là: " +
        "[" + demoArray.join(", ") + "]";
    document.getElementById('result').innerHTML = "";
}

function findItem() {
    let item = prompt("Nhập vào phần tử muốn tìm trong mảng");
    if (findItemArray(demoArray,item) !== -1) {
        return document.getElementById('result').innerHTML = "Phần tử có giá trị là " +
            item + " xuất hiện " + findItemArray(demoArray, item) + " lần";
    }
    return document.getElementById('result').innerHTML = "Phần tử có giá trị là " +
        item + " không xuất hiện trong mảng";
}


function addItemArray(array) {
    let index = 1;
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào phần tử thứ: " + index + " của mảng. Nhấn cancel để lưu lại mảng");
        if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào")
        } else {
            array.push(input);
            index++;
        }
    }
    array.pop();
    return array;
}

function findItemArray(array, value) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == value) {
            count++;
        }
    }
    if (count > 0) {
        return count;
    }
    return -1;
}