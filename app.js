const filterOutFalsy = (in1, in2) => (in1 ? in2 : in1);

const arrLength = (arr = []) => {
    return arr.length;
};

const lastElem = (arr = []) => {
    return arr[arr.length - 1];
};

const arrSum = (arr = []) => {
    return arr.reduce((prev, next) => {
        return prev + next;
    }, 0);
};

const progressiveSum = (num) => {
    // two ways to solve this, one is a loop to sum or the very non-expensive constant time operation
    // o^n vs n times
    return (num * (num + 1)) / 2;
};

module.exports = {
    filterOutFalsy,
    arrLength,
    lastElem,
    arrSum,
    progressiveSum,
};
