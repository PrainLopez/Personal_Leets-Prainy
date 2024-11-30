module.exports = {
    solution: function (S) {
        const dashIndex = S.indexOf('-');
        const firstWord = S.slice(0, dashIndex);
        const secondWord = S.slice(dashIndex + 1);

        if (firstWord.length < 3 || secondWord.length < 3) { return false; }

        const firstSuffix = firstWord.slice(firstWord.length - 3);
        if (secondWord.endsWith(firstSuffix)) { return true; }
        else { return false; }
    }
};