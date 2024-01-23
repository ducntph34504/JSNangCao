// 'window' có phạm vi toàn cục
// alert('Hello');
// console.log(innerWidth);

// Biến toàn cục
const x = 100;

console.log(x, 'in global');

function run() {
    // Truy cập các biến toàn cục trong hàm
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

// Truy cập các biến toàn cục theo khối
if (true) {
    console.log(x, 'in block');
}

function add() {
    // Ghi đè biến x toàn cục (làm mờ biến)
    const x = 1;
    const y = 50;
    console.log(x + y);
}

// Không thể truy cập biến phạm vi hàm trong phạm vi toàn cục
console.log(y);

add();