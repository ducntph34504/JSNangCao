const x = 100;

// Câu lệnh If là một khối
if (true) {
    console.log(x);
    const y = 200;
    console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// Vòng lặp là một khối
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Sử dụng var
if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c);

// var IS có phạm vi hàm
function run() {
    var d = 100;
    console.log(d);
}

run();

console.log(d);


