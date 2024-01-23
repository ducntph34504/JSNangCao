// Cú pháp IFFE (Có phạm vi riêng và chạy ngay)
(function () {
    const user = 'Huy';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

// Tham số
(function (name) {
    console.log('Hello ' + name);
})('Minh');

// Named IIFE (Chỉ có thể gọi đệ quy)
(function hello() {
    console.log('Hello');
})();