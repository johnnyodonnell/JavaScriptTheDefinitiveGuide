
const o = {
    even: function(n) {
        if (n === 0) {
            return true;
        } else {
            return this.odd(n - 1);
        }
    },

    odd: function(n) {
        if (n === 0) {
            return false;
        } else {
            return this.even(n - 1);
        }
    },
};

console.log(o.even(10));
console.log(o.even(11));

const execute = function(func) {
    func();
};

const o2 = {
    even: function(n) {
        if (n === 0) {
            return true;
        } else {
            execute(function() {
                this.odd(n - 1);
            });
        }
    },

    odd: function(n) {
        if (n === 0) {
            return false;
        } else {
            execute(function() {
                this.even(n - 1);
            });
        }
    },
};

console.log(o2.even(10));
console.log(o2.even(11));

