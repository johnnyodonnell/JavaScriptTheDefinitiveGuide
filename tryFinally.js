
const num = function() {
    try {
        return 1;
    } finally {
        return 2;
    }
};

console.log(num());
