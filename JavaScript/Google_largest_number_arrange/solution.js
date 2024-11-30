module.exports = {
    solution: function (N) {
        const arrN = [];
        while (N > 0) {
            const digit = N % 10;
            arrN.push(digit);

            N = Math.floor(N / 10);
        }

        arrN.sort((a, b) => a - b);

        let multiplier = 100;
        let res = 0;
        while (multiplier >= 1) {
            const digit = arrN.pop();
            res += digit * multiplier;

            multiplier = multiplier / 10;
        }

        return res;
    }
};