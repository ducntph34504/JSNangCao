function caculator(a, b, x) {
    let result;
    switch (x) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            console.log('error');
            break;
    }
    return (result);
}

console.log(caculator(5, 3, '+'));