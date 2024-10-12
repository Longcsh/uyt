let memory = 0; // Biến để lưu trữ giá trị nhớ
let num1 = '';
let operation = '';

function appendNumber(number) {
    if (operation) {
        document.getElementById('result').value += number;
    } else {
        num1 += number;
        document.getElementById('result').value = num1; // Cập nhật ô kết quả
    }
}

function appendDecimal() {
    if (operation) {
        const num2Field = document.getElementById('result');
        if (!num2Field.value.includes('.')) {
            num2Field.value += '.';
        }
    } else {
        if (!num1.includes('.')) {
            num1 += '.';
            document.getElementById('result').value = num1;
        }
    }
}

function setOperation(op) {
    if (num1) {
        operation = op;
        document.getElementById('result').value += ` ${op} `;
    }
}

function calculate() {
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(document.getElementById('result').value.split(' ').pop());
    let result;

    if (operation === 'sqrt') {
        result = Math.sqrt(num1Value);
    } else if (operation === '^') {
        result = Math.pow(num1Value, 2);
    } else {
        if (isNaN(num2Value)) {
            alert('Vui lòng nhập số thứ hai.');
            return;
        }

        switch (operation) {
            case '+':
                result = num1Value + num2Value;
                break;
            case '-':
                result = num1Value - num2Value;
                break;
            case '*':
                result = num1Value * num2Value;
                break;
            case '/':
                if (num2Value === 0) {
                    alert('Không thể chia cho 0.');
                    return;
                }
                result = num1Value / num2Value;
                break;
            default:
                alert('Vui lòng nhập phép toán hợp lệ.');
                return;
        }
    }

    document.getElementById('result').value = result.toFixed(2);
    clearInputs(); // Reset các giá trị sau khi tính
}

function memoryAdd() {
    const result = parseFloat(document.getElementById('result').value);
    if (!isNaN(result)) {
        memory += result;
        alert('Giá trị nhớ hiện tại: ' + memory);
    }
}

function memorySubtract() {
    const result = parseFloat(document.getElementById('result').value);
    if (!isNaN(result)) {
        memory -= result;
        alert('Giá trị nhớ hiện tại: ' + memory);
    }
}

function memoryRecall() {
    num1 = memory.toString(); // Gọi nhớ vào số thứ nhất
    document.getElementById('result').value = num1;
}

function clearMemory() {
    memory = 0; // Xóa giá trị nhớ
    alert('Đã xóa giá trị nhớ.');
}

function clearInputs() {
    num1 = '';
    operation = '';
    document.getElementById('result').value = '';
}
